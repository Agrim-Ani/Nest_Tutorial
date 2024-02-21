import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';

//responsible for any route related to customers
@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
