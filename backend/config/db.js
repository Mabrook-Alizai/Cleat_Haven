import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://MabrookKhanAlizai:%23Mabrook1@cluster0.jqncg.mongodb.net/cleat-haven').then(()=>console.log("DB connected"));
}