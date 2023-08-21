import { Test, TestingModule } from '@nestjs/testing';
import { CardsService } from './cards.service';
import { getModelToken } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';

const cardArray = [
  { _id: '64e32a1fecb7bcbd2067faef', name: 'aquaman', img: 'aquaman.jpg' },
  { _id: '64e32a1fecb7bcbd2067faf0', name: 'batman', img: 'batman.jpg' },
];

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(async () => {
    const mockCardModel = {
      find: jest.fn().mockResolvedValue(cardArray),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardsService,
        {
          provide: getModelToken(Card.name),
          useValue: mockCardModel,
        },
      ],
    }).compile();

    service = module.get<CardsService>(CardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all cards', async () => {
    const res = await service.findAll();
    expect(res).toEqual(cardArray);
  });
});
