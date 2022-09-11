import { CreatePrestataireInput } from './create-prestataire.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Roles } from '../../../roles/role.enum';


@InputType()
export class UpdatePrestataireInput extends PartialType(CreatePrestataireInput) {
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

  @Field()
  @Column({type: "enum",
          enum: Roles,
          default: Roles.ARTISTE})
  roles: Roles
}
