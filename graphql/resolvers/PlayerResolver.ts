import {Arg, Query, Resolver} from "type-graphql";
import {Player} from '../../types/Player'
import {PlayerService, PlayerServiceImpl} from "../services/PlayerService";
import CycleValScraper from "../../CycleValScraper";
import initCycleTLS from "cycletls";

@Resolver(Player)
export class PlayerResolver {

    constructor(private playerService: PlayerService) {
        this.playerService = new PlayerServiceImpl()
    }

    @Query(returns => Player)
    async player(@Arg("name") name: string, @Arg("tagline") tagline: string) {
        return await this.playerService.getPlayer(name, tagline)
    }
}
