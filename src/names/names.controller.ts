import { Controller, Get } from '@nestjs/common';

@Controller('names')
export class NamesController {
    @Get('abc')
    getAbc() : string {
        return "Abc is fetched"

    }
}
