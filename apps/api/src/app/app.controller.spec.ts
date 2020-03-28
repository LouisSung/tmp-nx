import {Test, TestingModule} from '@nestjs/testing';

import {AppController} from './app.controller';
import {AppService} from './app.service';

describe('appController', () => {
  let app: TestingModule;

  beforeAll(async() => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect.assertions(1);
      const appController = app.get<AppController>(AppController);

      expect(appController.getData()).toStrictEqual({message: 'Welcome to api!'});
    });
  });
});
