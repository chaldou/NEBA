import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";


@InputType()
export class CreateArtistInput{
    @Field()
    @Column()
    name: string
}