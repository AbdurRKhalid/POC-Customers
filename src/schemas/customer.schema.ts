import { Prop, Schema } from "@nestjs/mongoose";

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