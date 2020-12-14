import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const FileSchema = SchemaFactory.createForClass(File);
