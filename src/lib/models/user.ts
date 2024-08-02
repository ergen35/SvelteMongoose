import { Schema, model } from "mongoose";

// Document Representation
export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
}

//Schema
export const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: false },
});


export const User = model<IUser>('User', userSchema);