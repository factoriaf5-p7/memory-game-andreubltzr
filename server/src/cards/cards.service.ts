import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async getCards(theme: string) {
    try {
      const cards = await this.cardModel.find({ theme });
      return cards;
    } catch (error) {
      throw error;
    }
  }
}
