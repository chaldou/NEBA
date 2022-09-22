import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Convive } from "./convive.entity";
import { Event } from "./events.entity";

@Entity()
@ObjectType()
export class EventToConvive{

    @Field()
    @Column()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Event, (event) => event.eventToconvive)
    @JoinColumn({name: 'event_id'})
    public event!: Event

    @ManyToOne(() => Convive, (convive) => convive.eventToconvive)
    @JoinColumn({name: 'convive_id'})
    public convive!: Convive

}