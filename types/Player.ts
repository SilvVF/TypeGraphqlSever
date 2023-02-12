import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Player  {

    @Field()
    name: string;

    @Field()
    tagline: string;

    @Field()
    data: string;
}
