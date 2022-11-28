const express = require('express');
const app = express();
const db = require("./db/db.connect")
const todoRoutes = require('./routes/todo.routes')
app.use(express.json())

db.connect();


app.use("/todos", todoRoutes)



app.use((error, req, res, next)=>{
    // console.log(error)
    res.status(500).json({ message: error.message });
});

// app.listen(3000, ()=>{
//     console.log(`Server running on PORT: 3000`);
// })



module.exports = app