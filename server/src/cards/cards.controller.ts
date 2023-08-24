import { Controller, Get, Query } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  findAll(@Query('theme') theme: string) {
    return this.cardsService.getCards(theme);
  }
}
