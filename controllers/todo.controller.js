const TodoModel = require("../models/todo.model");


module.exports = {

    createTodo: (req,res,next) => {
        TodoModel.create(req.body)
    }

}