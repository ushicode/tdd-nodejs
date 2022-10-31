const express = require('express');
const app = express();

const CONST_OBJ = {
    port: 3000
}

app.get("/", (req, res)=>{
    res.send("Hello World")
});

app.listen(CONST_OBJ.port, ()=>{
    console.log(`Server running on PORT: ${CONST_OBJ.port}`);
})

module.exports = CONST_OBJ