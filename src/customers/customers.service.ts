import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AddCustomerDto } from "src/dto/add-customer.dto";
import { Customer, CustomerDocument } from "src/schemas/customer.schema";

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>
    ) {}

    async addCustomer(addCustomerDto: AddCustomerDto) {
        const customer = new this.customerModel(addCustomerDto);
        return customer.save();
    }
}