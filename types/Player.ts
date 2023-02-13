import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class Stats {

    @Field({defaultValue: 0})
    kills: number;
}

@ObjectType()
export class Ghost {

    @Field({defaultValue: 'pistol'})
    weaponType: string = 'pistol';

    @Field({defaultValue: 'Ghost'})
    name: string = 'Ghost'

    @Field(() => Stats)
    stats: Stats
}


@ObjectType()
export class Player  {

    @Field()
    name: string;

    @Field()
    tagline: string;

    @Field(  () => Ghost, {nullable: true})
    ghost: Ghost
}

