import { CreateHoteInput } from './create-hote.input';
import { InputType, Field, Int, PartialType} from '@nestjs/graphql';
import { Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateHoteInput extends PartialType(CreateHoteInput) {
  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  name: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  telephone: string;

  @Field()
  @Column('varchar', { nullable: true, length: 100 })
  adresse: string;

  @Field()
  @Column('varchar', { nullable: false, length: 100 })
  password: string;
}

@InputType()
export class LogoutHote{
  
    @IsNotEmpty()
    from: string;

}
