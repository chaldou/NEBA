import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class CreateAlbumInput{
    @Field()
    @Column()
    titre: string
}