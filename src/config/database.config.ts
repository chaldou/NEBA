import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'Choupy270991',
    database: 'neba_db',
    entities: ['dist/events/entities/*','dist/user/entities/*'],
    synchronize: true,
    autoLoadEntities: true
}