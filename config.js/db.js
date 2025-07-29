import mongoose from "mongoose";


const connectDB = async()=>{
try{
await mongoose.connect(process.env.MONGO_URI);
console.log("databas is connected buddy")
}catch(error){
    console.error("DB is not connect ", error.massage);
    process.exit(1);
}

} 

export default connectDB;