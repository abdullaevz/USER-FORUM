import { model, Schema } from "mongoose";


const forumSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    phoneNumber: String,
    email: String,
    avatar: String,
});


export const formModel = model("forums", forumSchema);