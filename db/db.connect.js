const mongoose = require("mongoose")
require('dotenv').config()

const connect = async ()=>{
   try {
    await mongoose.connect(
        "mongodb+srv://"+process.env.DB_CREDENTIAL+".mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true }
        );
        console.log(`CONNECTION SUCCESS`);
   } catch (err) {
    console.log(`CONNECTION ERR : ${err.message}`);
   }
}

module.exports = {connect}
