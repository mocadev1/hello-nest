import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats') // The string is a route path prefix
export class CatsController {
  @Post()
  /**
   * Using the @Body() decorator we can accept any client params.
   * But as we did this we need to have a DTO (Data Transfer Object). This
   * define how the data will be sent over the network. And Nest recomends using
   * classes over of TypeScript interfaces, by using classes Nest can refer them
   * at runtime.
   */
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get()
  /** We can access the request object of the underlying platform (Express by
   * default) adding the @Req() decorator */
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
