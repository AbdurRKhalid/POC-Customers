import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CustomerDocument = Customer & Document;
@Schema({
    timestamps: { createdAt: 'created' }
})

export class Customer {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    token: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);