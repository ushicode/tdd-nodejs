const TodoModel = require("../models/todo.model");

module.exports = {

    createTodo: async (req,res,next) => {
        const createModel = TodoModel.create(req.body)
        res.status(201).json(createModel)
    }

}