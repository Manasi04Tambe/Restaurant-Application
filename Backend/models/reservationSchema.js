import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name should contains at least 3 characters"],
        maxLength:[30,"First name cannot exceed 30 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last name should contains at least 3 characters"],
        maxLength:[30,"Last name cannot exceed 30 characters"]
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must contains only 10 digits!"],
        maxLength:[10,"Phone number must contains only 10 digits!"]
    }
   
   
})

export const Reservation = mongoose.model("Reservation", reservationSchema)