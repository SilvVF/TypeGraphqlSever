import {Ctx, Field, Mutation, ObjectType, Resolver} from "type-graphql";
import * as s from "connect-redis";
import {MyContext} from "../../index";

@ObjectType()
class ApiResponse {

    @Field(
        returns => Boolean,
        {defaultValue: false})
    successful: boolean

    @Field(returns => String)
    message: string | undefined
}



@Resolver()
class UserResolver {

    @Mutation(returns => ApiResponse)
    joinLivePost(
        @Ctx() { req, res }: MyContext
    ) {


    }
}
