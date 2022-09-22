import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Album } from "./album.entity";
import { EventToArtiste } from "./eventToartiste.entity";


@Entity()
@ObjectType()
export class Artiste{
    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: number
    
    @Field()
    @Column()
    name: string
    
    @ManyToOne(() => Album, (album) => album.artiste)
    album: Album[]  

    @OneToMany(() => EventToArtiste, eventToartiste => eventToartiste.artisteid)
    public eventToartiste!: Array<EventToArtiste>;

}