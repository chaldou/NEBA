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
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { name: user.name, telephone: user.telephone};
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
