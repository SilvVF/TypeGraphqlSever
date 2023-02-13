import {Player} from "../../types/Player";
import {getPlayerData} from "../../CycleValScraper";
import {CycleTLSClient} from "cycletls";
import {ValData} from "../../types/TrnPageData";


type map = {
    [key: string]: Player
}

const cache: map = {}

export interface PlayerService {
    getPlayer(name: string, tag: string): Promise<Player>
}
export class PlayerServiceImpl implements PlayerService{

     constructor(
         private readonly client: CycleTLSClient
     ) {
         this.client = client
     }

    async getPlayer(name: string, tag: string): Promise<Player> {
         if (cache[name + tag]) {   return cache[name + tag] }
         const pageData = await getPlayerData(name, tag, this.client)
         const trnData: ValData = JSON.parse(pageData)

         const data = trnData.segments.map(it => {
            const kills = it.stats.kills.value
            const actModeOrWeapon = it.metadata.name
            return {
                category: actModeOrWeapon,
                kills: kills
            }
        })
        console.log(data)
        const player = {
                 name: name,
                 tagline: tag,
                 ghost: {
                     name: 'Ghost',
                     weaponType: 'pistol',
                     stats: {
                         kills: data.filter(it => it.category == 'Ghost')[0].kills
                     }
                 }
             } as Player
        cache[name + tag] = player
        return player
    }
}

