import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CardDocument = HydratedDocument<Card>;

@Schema()
export class Card {
  @Prop()
  name: string;

  @Prop()
  img: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
