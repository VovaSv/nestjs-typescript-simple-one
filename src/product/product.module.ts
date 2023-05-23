import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from './product.model';

@Module({
  controllers: [ProductController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModel,
        schemaOptions: {
          collection: 'MyCustomProductCollectionName', // If we will not set collectiona name so by default it will take AuthModel name
        },
      },
    ]),
  ],
})
export class ProductModule {}
