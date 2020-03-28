import {Controller, Get} from '@nestjs/common';
import {Message} from '@louis/api-interfaces';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  public getData(): Message {
    return this.appService.getData();
  }
}
