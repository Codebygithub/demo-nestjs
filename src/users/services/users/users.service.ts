import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { userDatadto } from 'src/users/dtos/userData.dto';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
   constructor(@InjectRepository(User) private userRespo:Repository<User>){}
   createUser(requestBody:any){
    this.userRespo.create(requestBody)
   }
   findUserServices(){
      this.userRespo.find()
   }
   deleteUser(id:number){
      return this.userRespo.delete(id);
   }
   async register(requestBody:User){
         const user = this.userRespo.create(requestBody)
         if(!user) throw new Error('USER EXIST ' )
         this.userRespo.save(user)
      
   }

    
}
