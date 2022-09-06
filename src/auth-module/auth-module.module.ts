import { Module } from '@nestjs/common';
import { AuthModuleService } from './auth-module.service';
import { HoteModule } from 'src/user/modules/hote.module';

@Module({
    imports: [HoteModule],
    providers: [AuthModuleService],
})
export class AuthModuleModule {}
