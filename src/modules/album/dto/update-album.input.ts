import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class UpdateAlbumInput{
    @Field()
    @Column()
    titre: string
}