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

    async addCustomer(addCustomerDto: AddCustomerDto): Promise<CustomerDocument> {
        const customer = new this.customerModel(addCustomerDto);
        return customer.save();
    }

    async findAll(): Promise<CustomerDocument[]> {
        return this.customerModel.find();
    }

    async delete(id: string) {
        return this.customerModel.deleteOne({_id: id});
    }

    async findOne(id: string): Promise<CustomerDocument> {
        return this.customerModel.findOne({_id: id});
    }
}