import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}

  async create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  async findAll() {
    try {
      const cards = await this.cardModel.find();
      return cards;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    return `This action updates a #${id} card`;
  }

  async remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
