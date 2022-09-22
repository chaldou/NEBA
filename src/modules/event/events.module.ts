import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../../entities/events.entity';
import { HoteModule } from '../hote/hote.module';
import { EventResolver } from './events.resolver';
import { EventService } from './events.service';

@Module({
    providers: [EventResolver, EventService],
    imports: [ HoteModule,TypeOrmModule.forFeature([Event])],
    exports: [EventResolver, EventService]
})
export class EventsModule {}
