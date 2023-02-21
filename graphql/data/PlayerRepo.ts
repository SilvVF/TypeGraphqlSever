import {MapData, Player, Weapon, WeaponStats} from "../../types/Player";
import {getPlayerData} from "../../CycleValScraper";
import {CycleTLSClient} from "cycletls";
import {ValData} from "../../types/TrnPageData";
import {mapList, oneHourAsMillis, weaponList} from "./player-constants";


type map = {
    [key: string]: {
        player: Player
        time: number
    } | undefined
}

const cache: map = {}


export interface PlayerRepo {
    getPlayer(name: string, tag: string): Promise<Player>
    savePlayer(name: string, tag: string): Promise<Player>
}

export class PlayerRepoImpl implements PlayerRepo {

    constructor(
         private readonly client: CycleTLSClient
     ) {
         this.client = client
     }

    async getPlayer(name: string, tag: string): Promise<Player> {
        if (Date.now() - (cache[name + tag]?.time ?? 0) > oneHourAsMillis * 5) {
            return await this.savePlayer(name, tag)
        }
        return cache[name + tag]!.player
    }

    async savePlayer(name: string, tag: string): Promise<Player> {

        const trnData: ValData = JSON.parse(await getPlayerData(name, tag, this.client))
        console.log(trnData.segments.map(it => it.metadata.name))
        const weapons = filterWeaponData(trnData)
        const maps = filterMapData(trnData)
        const { tierName, iconUrl } = trnData.segments[0].stats.rank.metadata

        const player: Player= {
            name: name,
            tag: tag,
            rank: tierName,
            rankIconUrl: iconUrl,
            weapons: weapons,
            maps: maps
        }
        cache[name + tag] = {
            player: player,
            time: Date.now()
        }
        return player
    }
}


function filterMapData(valData: ValData): MapData[] {
    return valData.segments
        .filter(it => {
            for (const name of mapList) {
                if (it.metadata.name.toLowerCase() == name.toLowerCase()) {
                    return true
                }
            }
            return false
        })
        .map(item => {
            const mapData: MapData = {
                name: item.metadata.name,
                winPct: item.stats.matchesWinPct.value,
            }
            return mapData
        })
}

function filterWeaponData(valData: ValData): Weapon[] {
    return valData.segments
        .filter(it => {
            for (const name of weaponList) {
                if (it.metadata.name.toLowerCase() == name.toLowerCase()) {
                    return true
                }
            }
            return false
        })
        .map(item => {
            const stats: WeaponStats = {
                hsPct: item.stats.headshotsPercentage.value,
                kills: item.stats.kills.value
            }
            const weapon: Weapon = {
                name: item.metadata.name,
                weaponType: item.metadata.name,
                stats: stats,
            }
            return weapon
        })
}


