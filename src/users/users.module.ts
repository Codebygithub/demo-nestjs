import { MiddlewareConsumer, Module, NestModule, Request, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UserMiddlewareMiddleware } from './middlewares/user-middleware/user-middleware.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddlewareMiddleware).forRoutes({
      path:'users',
      method:RequestMethod.ALL
    },
    {
      path:'users/:id',
      method:RequestMethod.ALL
    }
    
    )
    

  }

}
