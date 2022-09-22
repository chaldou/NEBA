import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Choupy270991',
    database: 'neba_db',
    entities: ['dist/prestataire/entities/*','dist/user/entities/*','dist/hote/entities/*','dist/events/entities/*','dist/user/entities/*','dist/convive/entities/*','dist/album/entities/*','dist/artiste/entities/*','dist/eventsToconvive/entities/*','dist/eventsToartiste/entities/*'],
    synchronize: true,
    autoLoadEntities: true
}