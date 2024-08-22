import mongoose from "mongoose"

export const dbConnect = () => {
    mongoose.connect(process.env.URI).then(() => {
        console.log("MongoDB connected !");
    });
}