import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/users')
export class UserController {


  @Get('/hello')
  sayHello(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }


  @Get('/:id')
  getById(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }

  @Post()
  post(): string {
    return 'post';
  }

  @Get('/sample')
  get(): string {
    return 'Hello, NestJS!';
  }
}
