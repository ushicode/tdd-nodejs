const express = require('express');
const app = express();
const db = require("./db/db.connect")
const todoRoutes = require('./routes/todo.routes')
app.use(express.json())

db.connect();


app.get("/", (req, res)=>{
    res.send("Hello World")
});

app.use("/todos", todoRoutes)

// app.listen(CONST_OBJ.port, ()=>{
//     console.log(`Server running on PORT: ${CONST_OBJ.port}`);
// })



module.exports = app