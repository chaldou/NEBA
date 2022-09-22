import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class UpdateArtistInput{
    @Field()
    @Column()
    name: string
}