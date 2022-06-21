import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats') // The string is a route path prefix
export class CatsController {

  /** The CatsService is injected through the class constructor. The `private`
   * syntax shorthand allow us to bot both declare and initilize the catsService
   * member immediately in the same location.
   */
  constructor(private catsService: CatsService) {}
  @Post()
  /**
   * Using the @Body() decorator we can accept any client params.
   * But as we did this we need to have a DTO (Data Transfer Object). This
   * define how the data will be sent over the network. And Nest recomends using
   * classes over of TypeScript interfaces, by using classes Nest can refer them
   * at runtime.
   */
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
