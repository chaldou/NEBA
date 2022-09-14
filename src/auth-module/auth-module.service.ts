import { Injectable } from '@nestjs/common';
import { HoteService } from 'src/modules/hote/hote.service';

@Injectable()
export class AuthModuleService {
  jwtService: any;
    constructor(private usersService: HoteService) {}

    async validateUser(name: string, password: string): Promise<any> {
      const user = await this.usersService.findbyhotename(name);
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { username: user.name, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
}
