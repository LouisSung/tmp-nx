import {Test} from '@nestjs/testing';

import {AppService} from './app.service';

describe('appService', () => {
  let service: AppService;

  beforeAll(async() => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect.assertions(1);
      expect(service.getData()).toStrictEqual({message: 'Welcome to api!'});
    });
  });
});
