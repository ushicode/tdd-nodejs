const TodoModel = require("../models/todo.model");

module.exports = {

    createTodo: async (req, res, next) => {
        try {
            const createModel = await TodoModel.create(req.body)
            res.status(201).json(createModel)
        } catch (err) {
            next(err)
        }
    },

    getTodos: async (req, res, next)=>{
           try {
            const allTodos = await TodoModel.find({})
            res.status(200).json(allTodos)
           } catch (err) {
            next(err);
           }
    }

    

}