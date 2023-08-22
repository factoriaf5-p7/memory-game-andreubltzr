import { Test, TestingModule } from '@nestjs/testing';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

const cardArray = [
  { _id: '64e32a1fecb7bcbd2067faef', name: 'aquaman', img: 'aquaman.jpg' },
  { _id: '64e32a1fecb7bcbd2067faf0', name: 'batman', img: 'batman.jpg' },
];

describe('CardsController', () => {
  let controller: CardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [CardsService],
    }).compile();

    controller = module.get<CardsController>(CardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
