import {Arg, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {Player} from '../../types/Player'
import {MyContext} from "../../index";

@Resolver(Player)
export class PlayerResolver {


    @Query(returns => Player)
    async player(
        @Arg("name") name: string,
        @Arg("tag") tag: string,
        @Ctx() { playerRepo }: MyContext
    ) {
       return await playerRepo.getPlayer(name, tag);
    }

    @Mutation(returns => Player)
    async savePlayer(
        @Arg("name") name: string,
        @Arg("tag") tag: string,
        @Ctx() { playerRepo }: MyContext
    ) {
        return await playerRepo.savePlayer(name, tag)
    }
}
