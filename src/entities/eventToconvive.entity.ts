/* eslint-disable prettier/prettier */
import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Convive } from "./convive.entity";
import { Event } from "./events.entity";

@ObjectType()
@Entity()
export class EventToConvive{
    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(() => Event, (event) => event.eventToconvive,{cascade: true })
    @JoinColumn({name: 'event_id'})
    public event!: Event

    @ManyToOne(() => Convive, (convive) => convive.eventToconvive,{cascade: true })
    @JoinColumn({name: 'convive_id'})
    public convive!: Convive

}