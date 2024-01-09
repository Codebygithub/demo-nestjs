import { ForbiddenException, HttpCode, HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UserMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next:NextFunction) {

    const {authorization} = req.headers
    if(!authorization) { throw new HttpException('no Token',HttpStatus.BAD_REQUEST)}
    
    if(authorization)
      {
        next()
      }

    console.log('middleware ')
    next();
  }
}
