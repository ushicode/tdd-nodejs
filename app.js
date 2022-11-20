const express = require('express');
const app = express();
const db = require("./db/db.connect")
const todoRoutes = require('./routes/todo.routes')
db.connect();
app.use(express.json())



app.get("/", (req, res)=>{
    res.send("Hello World")
});

app.use("/todos", todoRoutes)

// app.listen(3000, ()=>{
//     console.log(`Server running on PORT: 3000`);
// })



module.exports = app