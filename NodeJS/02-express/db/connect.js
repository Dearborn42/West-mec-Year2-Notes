// npm install mongoose
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = ()=>{
    // remember this is temporary and needs to be replaced
    const connectString = process.env.MONGO_URI;

    mongoose.connect(connectString).
    then(()=>console.log('databse connected successfully')).
    catch((err=>console.log(err)))
}

module.exports = connectDB;