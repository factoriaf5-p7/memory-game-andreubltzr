import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const user = {
  _id: '64e87b4ef4017d7015e7f5c8',
  name: 'name',
  points: '10',
  avatar: 'avatar.png',
};

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const mockUserService = {
      findOne: jest.fn().mockResolvedValue(user),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findOne should return a user', async () => {
    const res = await controller.findOne('name');
    expect(res).toMatchObject(user);
  });

  it('findOne should return 404 error if user not found', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(null);

    const res = await controller.findOne('noname');
    expect(res).toBeNull();
  });
});
