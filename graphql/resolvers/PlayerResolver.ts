import {Arg, Ctx, Query, Resolver} from "type-graphql";
import {Player} from '../../types/Player'
import {MyContext} from "../../index";

@Resolver(Player)
export class PlayerResolver {


    @Query(returns => Player)
    async player(
        @Arg("name") name: string,
        @Arg("tagline") tagline: string,
        @Ctx() { playerService }: MyContext
    ) {
       return await playerService.getPlayer(name, tagline);
    }
}
