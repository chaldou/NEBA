/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private usersService: UserService,
                private jwtService: JwtService,) {}

    async validateUser(telephone: string, password: string): Promise<any> {
      const user = await this.usersService.findByTelephone(telephone)
      if (user && user.password === password) {
        return user;
      }
      return null;
    }

    async login(user: any) {
      const payload = { telephone: user.telephone, sub: user.id};
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
