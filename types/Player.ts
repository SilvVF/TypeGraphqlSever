import {Field, ID, ObjectType} from "type-graphql";

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
export class Player  {

    @Field()
    name: string;

    @Field()
    tag: string;

    @Field(  () => [Weapon], {nullable: true})
    weapons: Weapon[]
}

