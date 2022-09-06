import { Injectable } from '@nestjs/common';
import { Hote } from 'src/user/entities/hote.entity';
import { HoteService } from 'src/user/providers/hote.service';

@Injectable()
export class AuthModuleService {
    constructor(private usersService: HoteService) {}

    async validateUser(name: string, password: string): Promise<any> {
      const user = await this.usersService.findbyhotename(name);
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
}
