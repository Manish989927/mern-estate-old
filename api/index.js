import express from "express";
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
})
    
// ... rest of your code

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
