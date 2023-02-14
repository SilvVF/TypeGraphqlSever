import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class WeaponStats {

    @Field({defaultValue: 0})
    kills: number;

    @Field()
    hsPct: number;
}



@ObjectType()
export class Weapon {

    @Field()
    name: string

    @Field()
    weaponType: string

    @Field()
    stats: WeaponStats
}

@ObjectType()
export class MapData {

    @Field()
    name: string

    @Field()
    winPct: number
}

@ObjectType()
export class Player  {

    @Field()
    name: string;

    @Field()
    tag: string;

    @Field(  () => [Weapon], {nullable: true})
    weapons: Weapon[]

    @Field(() => [MapData])
    maps: MapData[]
}

