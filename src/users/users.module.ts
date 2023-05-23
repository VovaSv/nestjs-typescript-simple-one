import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UserSchema } from './models/user.model';
import { PostSchema } from './models/post.model';

@Module({
  providers: [UsersService],
  imports: [
    MongooseModule.forFeature([
      { name: 'UserModelMy', schema: UserSchema },
      { name: 'PostModelMy', schema: PostSchema },
    ]),
  ],
})
export class UserModule {}
