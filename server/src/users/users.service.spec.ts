import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schema/user.schema';

const user = {
  _id: '64e87b4ef4017d7015e7f5c8',
  name: 'name',
  points: '10',
  avatar: 'avatar.png',
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const mockUserModel = {
      findOne: jest.fn().mockResolvedValue(user),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findOne should return a valid user', async () => {
    const res = await service.findOne('name');
    expect(res).toMatchObject(user);
  });

  it('findOne should return 404 error if user not found', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(null);

    const res = await service.findOne('noname');
    expect(res).toBeNull();
  });
});
