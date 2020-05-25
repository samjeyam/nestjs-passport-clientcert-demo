import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'

@Controller('helloworld')
export class HelloworldController {

    // https://localhost:443/helloworld/ - no client cert auth enforcement
    @Get()
    getHello(): string {
        return "hello world"
    }

    // https://localhost:443/helloworld/greetings - client cert auth enforcement
    // with whitelisting based on config process.env.WHITELISTED_CN
    @UseGuards(AuthGuard('client-cert'))
    @Get('/greetings')
    getGreetings(@Query() query): string {
        return `Hello ${query.name}`;
    }
}
