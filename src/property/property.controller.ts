import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

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
  create( @Body("name") name , @Body("type") type) {
    return `name is ${name} , type is ${type}`;
  }

  @Get(':id/:slug')
  findOne(@Param('id') id: string, @Param('slug') slug: string): string {
    return `Id is : ${id} , Slug is : ${slug}`;
  }
}
