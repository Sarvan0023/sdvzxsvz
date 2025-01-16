import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URI)
.then
(()=>{
    console.log("conntected to mongo");
})
.catch(()=>{
    console.log("error");
});