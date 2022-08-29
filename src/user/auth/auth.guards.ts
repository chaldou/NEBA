import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { GqlExecutionContext } from '@nestjs/graphql';
  import * as jwt from 'jsonwebtoken';//use to validate the token  
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const ctx = GqlExecutionContext.create(context).getContext();
      if (!ctx.headers.authorization) {
        return false;
      }
      ctx.user = await this.validateToken(ctx.headers.authorization);
      return true;
    }
  
    async validateToken(auth: string) {//pass through the authorization field and check the token that we signed in
      if (auth.split(' ')[0] !== 'Bearer') {//check that the first part is the bearer and the second the token
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }
      const token = auth.split(' ')[1];
  
      try {
        const decoded = jwt.verify(token, 'secret');
        return decoded;
      } catch (err) {
        const message = 'Token error: ' + (err.message || err.name);
        throw new HttpException(message, HttpStatus.UNAUTHORIZED);
      }
    }
  }
  