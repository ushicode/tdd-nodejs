const mongoose = require("mongoose")
require('dotenv').config()

const connect = async ()=>{
   try {
      console.log('Connected to DB');
   // const conn = 
   await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.mongodb.net/?retryWrites=true&w=majority`,
        {useNewUrlParser: true }
        );
   // const state = checkConnectState(conn.readyState)
   //     console.log(state);

      
   } catch (err) {
    console.log(`CONNECTION ERR : ${err.message}`);
   }
}

const checkConnectState = value => {
   if(value === 1)return 'Connected to DB'; else return 'Disconnected from DB'
}

module.exports = {connect}
