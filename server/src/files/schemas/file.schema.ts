import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose'

import { User } from 'src/users/schemas/user.schema'

export type FileDocument = File & Document;

@Schema()
export class File {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  size: string;

  @Prop()
  isInfected: boolean;

  @Prop()
  createdAt: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User
}

export const FileSchema = SchemaFactory.createForClass(File);
