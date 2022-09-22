import { Field, ObjectType } from "@nestjs/graphql";
import { isString } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Artiste } from "./artiste.entity";


@Entity()
@ObjectType()
export class Album{

    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Field()
    @Column()
    titre: string

    @ManyToOne(() => Artiste, (artiste) => artiste.album)
    artiste: Artiste


}