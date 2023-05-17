import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(), // Without passing nothing the ConfigModule will auto use .env file from root
    // ConfigModule.forRoot({ isGlobal: true }) -> to remove import in top-page.module
    MongooseModule.forRoot(
      'mongodb+srv://vovasvidi:OxUzvm6arepupnpo@cluster69.0nfk51j.mongodb.net/?retryWrites=true&w=majority&ssl=true',
    ),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
