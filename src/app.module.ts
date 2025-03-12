
import { Module } from '@nestjs/common';
import { CustomerService } from './modules/customer/customer.service';
import { CustomerController } from './modules/customer/customer.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from './database/databaseModule/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './modules/customer/customer.models'; // Importing Customer model


@Module({
  imports: [CustomerModule,
     SequelizeModule.forRoot({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'admin123',
          database: 'icc',
          models: [Customer],
          // , Order, CustomerOrder],

        }),
    ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {}
