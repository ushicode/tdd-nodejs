const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");
TodoModel.create = jest.fn();

let req,res,next;

beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});

// describe(name, fn) creates a block that groups together several related tests.
describe("TodoController.createTodo", ()=>{
    it("should have a createTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    });
    it("should call TodoModel.create", ()=>{
        req.body = newTodo;
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    });
} );