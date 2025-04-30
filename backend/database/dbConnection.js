// import mongoose, { mongo } from "mongoose";
import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "foodZ",
    }).then(() => {
        console.log("Database Connected successfully");
    }).catch((err) => {
        console.log(`error occurred ${err}`);
    });
};

