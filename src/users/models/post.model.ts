import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MonSchema } from 'mongoose';
import { User } from './user.model';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;

  @Prop({ type: MonSchema.Types.ObjectId, ref: 'UserModelMy' })
  author: User;
}

export const PostSchema = SchemaFactory.createForClass(User);
