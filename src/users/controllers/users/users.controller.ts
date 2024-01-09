import { ClassSerializerInterceptor,UseInterceptors,Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res, UseGuards, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { Request, Response } from 'express';
import { userDatadto } from 'src/users/dtos/userData.dto';
import { User } from 'src/users/entity/user.entity';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
    constructor(private userServices :UsersService){}
    @Post()
    create(@Body() requestBody:User) {
        this.userServices.createUser(requestBody)
    
    }
    @Get('/:id')
    GetUser(@Param('id',ParseIntPipe) id:number ){
        this.userServices.findUserServices()

    }
    @Delete('/:id')
    deleteUser(@Query('id' , ParseIntPipe) id:number){
        return  this.userServices.deleteUser(id);
    }


    @Post('/register')
    async register (@Body() requestBody :User  ){
        this.userServices.register(requestBody)
    }
    
}
