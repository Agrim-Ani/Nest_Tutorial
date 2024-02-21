import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer(){
        return {
            id: 1,
            email: 'agrim@map.in',
            createdAt: new Date(),
        };
    }
}
