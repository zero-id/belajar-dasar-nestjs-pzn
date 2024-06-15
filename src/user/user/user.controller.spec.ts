import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpMock from 'node-mocks-http';
import { title } from 'process';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('Latif');
    expect(response).toBe('Hello Latif');
  });

  it('should can get view', async () => {
    const res = httpMock.createResponse();
    controller.viewHello('Latif', res);

    expect(res._getRenderView()).toBe('index.html');
    expect(res._getRenderData()).toEqual({
      name: 'Latif',
      title: 'Template Engine',
    });
  });
});
