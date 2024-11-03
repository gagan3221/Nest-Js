import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createPropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'All Properties';
  }
  //   @Post
  //   create() : string {
  //     return "Create POST Request";
  //   }

  @Post()
  @HttpCode(202)
  create(@Body('name') name, @Body('type') type) {
    return `name is ${name} , type is ${type}`;
  }

  @Get(':id/:slug')
  findOne(@Param('id') id: string, @Param('slug') slug: string): string {
    return `Id is : ${id} , Slug is : ${slug}`;
  }
  @Get(':no')
  findByNo(@Param('no', ParseIntPipe) no, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof no);
    console.log(typeof sort);
    return `Number is ${no} and sort is ${sort}`;
  }
  @Post('body')
  @UsePipes(new ValidationPipe())
  createBody(@Body() body: createPropertyDto) {
    console.log(body);

    return body;
  }
}
