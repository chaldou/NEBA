import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Artiste } from "./artiste.entity";
import { Event } from "./events.entity";

@ObjectType()
@Entity()
export class EventToArtiste{
    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(() => Event, (event) => event.eventToartiste, {cascade: true })
    @JoinColumn({name: 'event_id'})
    public eventid!: Event

    @ManyToOne(() => Artiste, (artiste) => artiste.eventToartiste, {cascade: true })
    @JoinColumn({name: 'artiste_id'})
    public artisteid!: Artiste

}