const mongoose = require("mongoose")
require('dotenv').config()

const connect = async ()=>{
   try {
   const conn = await mongoose.connect(
        "mongodb+srv://"+process.env.DB_CREDENTIAL+".mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser: true }
        );
   const state = checkConnectState(mongoose.connection.readyState)
       console.log(state);
   } catch (err) {
    console.log(`CONNECTION ERR : ${err.message}`);
   }
}

const checkConnectState = (value) => {
   if(value === 1)return 'Connected to DB'; else return 'Disconnected from DB'
}

module.exports = {connect}
