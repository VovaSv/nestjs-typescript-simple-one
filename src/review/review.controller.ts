import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  HttpCode,
} from '@nestjs/common';

import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
