import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  // By default Post return code 200
  @HttpCode(200)
  @Post('login')
  async login() {}
}
