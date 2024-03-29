import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {} // eslint-disable-line @typescript-es
    @Get('')
    getCustomer(){
        return this.customersService.findCustomer();
    }
}
