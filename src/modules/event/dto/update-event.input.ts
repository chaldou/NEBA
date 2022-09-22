import { Field, InputType, PartialType } from "@nestjs/graphql";
import { Column } from "typeorm";
import { CreateEventInput } from "./create-event.input";

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  
    @Field()
    @Column('varchar', { nullable: false, length: 100 })
    name: string;
  
    @Field()
    @Column('text', { nullable: true })
    description: string;
  
     
    @Field()
    @Column('date')
    date_event: Date;
  
    @Field()
    @Column('time')
    time_event: Date;
}
