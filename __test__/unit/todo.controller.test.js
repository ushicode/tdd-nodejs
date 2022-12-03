const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");
const allTodos = require('../mock-data/all-todos.json')

TodoModel.create = jest.fn();
TodoModel.find = jest.fn()

let req,res,next;

beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    // next = null;
    next = jest.fn();
});

// GET Todos
describe('TodoController.getTodos', () => {  
    it("should have a getTodos function", ()=>{
        expect(typeof TodoController.getTodos).toBe("function")
    })
    it("should call TodoModel.find({})", async ()=>{
        await TodoController.getTodos()
       expect(TodoModel.find).toBeCalledWith({})
    })
    it("should return response with status 200 ans all todos", async ()=>{
        TodoModel.find.mockReturnValue(allTodos) 
        await TodoController.getTodos(req, res, next)
        expect(res.statusCode).toBe(200)
        expect(res._isEndCalled()).toBeTruthy()
        expect(res._getJSONData()).toStrictEqual(allTodos)
    })
    it('should handle errors in getTodos', async ()=>{
        const errorMessage = { message: "Error retrieving request" }
        const rejectedPromise = Promise.reject(errorMessage)
        TodoModel.find.mockReturnValue(rejectedPromise)
        await TodoController.getTodos(req, res, next)
        expect(next).toBeCalledWith(errorMessage)

    });
});

// Create Todo
// describe(name, fn) creates a block that groups together several related tests.
describe("TodoController.createTodo", ()=>{
    beforeEach(()=>{
        req.body = newTodo;
    })
    
    it("should have a createTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function")
    });
    it("should call TodoModel.create", ()=>{
        // req.body = newTodo;
        TodoController.createTodo(req, res, next)
        expect(TodoModel.create).toBeCalledWith(newTodo)
    });
    it("should return 201 response code", async ()=>{
        // req.body = newTodo;
        await TodoController.createTodo(req, res, next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    });
    it('should return json body in response',async ()=>{
        TodoModel.create.mockReturnValue(newTodo)
        await TodoController.createTodo(req, res, next)
        expect(res._getJSONData()).toStrictEqual(newTodo)  //toBe
    });
    it('should handle errors', async ()=>{
        const errorMessage = { message: "Done property missing" }
        const rejectedPromise = Promise.reject(errorMessage)
        TodoModel.create.mockReturnValue(rejectedPromise)
        await TodoController.createTodo(req, res, next)
        expect(next).toBeCalledWith(errorMessage)

    });

    // afterEach(()=>{
    //     jest.clearAllMock()
    // })
} );