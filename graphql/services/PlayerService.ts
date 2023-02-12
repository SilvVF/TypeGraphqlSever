import {Player} from "../../types/Player";
import CycleValScraper from "../../CycleValScraper";
import initCycleTLS  from "cycletls";

export interface PlayerService {

    getPlayer(name: string, tag: string): Promise<Player>
}


export class PlayerServiceImpl implements PlayerService {

    private valScraper: CycleValScraper | null = null

    async getPlayer(name: string, tag: string): Promise<Player> {
        if (!this.valScraper) {
            this.valScraper = new CycleValScraper(await initCycleTLS())
        }

        const pageData = await this.valScraper.getPlayer(name, tag) ?? "empty"

        return {
            name: name,
            tagline: tag,
            data: this.getJsonFromPage(pageData)
        } as Player
    }


    private getJsonFromPage(body: string) {
        const start = body.indexOf("\"segments\"")
        const end = body.indexOf("\"availableSegments\"")

        if (start == -1 || end == -1) {
            return "unable to get data for player check tagline and name"
        }

        return `{${body.substring(start, end - 1)}}`
    }
}

