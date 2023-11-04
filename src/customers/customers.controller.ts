import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CustomerService } from "./customers.service";
import { AddCustomerDto } from "src/dto/add-customer.dto";

@Controller('customers')

export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Post()
    add(@Body() addCustomerDto:AddCustomerDto) {
        return this.customerService.addCustomer(addCustomerDto);
    }

    @Get()
    getAll() {
        return this.customerService.findAll();
    }

    @Get(':id')
    findById(@Param() params: any) {
        return this.customerService.findOne(params.id);
    }

    @Delete('id')
    deleteById(@Param() params: any) {
        return this.customerService.delete(params.id);
    }
}