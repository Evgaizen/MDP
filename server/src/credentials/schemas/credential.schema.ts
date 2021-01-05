import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'

import { User } from 'src/users/schemas/user.schema'


export type CredentialDocument = Credential & Document;

@Schema()
export class Credential {
  @Prop({ required: true })
  service: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User

}

export const CredentialSchema = SchemaFactory.createForClass(Credential);
