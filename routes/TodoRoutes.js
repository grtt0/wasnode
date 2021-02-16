// import express, { Request, Response } from 'express';
import { Router } from 'express';
// import { runInThisContext } from 'vm';
import { TodoController } from "../controllers/TodoController.js";
// import { AuthController } from "../controllers/AuthController";
// import { Todo } from '../models/Todo';

export class TodoRoutes {
    // authController= new AuthController();
    todoController= new TodoController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/", this.todoController.getTodos);
        // this.router.get("/:id", this.todoController.getTodo);
        // this.router.post("/", this.authController.authenticateJWT, this.todoController.createTodo);
        // this.router.put("/", this.authController.authenticateJWT, this.todoController.updateTodo);
        // this.router.delete("/", this.authController.authenticateJWT, this.todoController.deleteTodo);
    }
}

// const router = express.Router()

// router.get('/api/todo', async (req: Request, res: Response) => {
//     const todo = await Todo.find({})

//     return res.status(200).send(todo)

//     // return res.send('the todo')
// })

// router.post('/api/todo', async (req: Request, res: Response) => {
//     const { title, description } = req.body;

//     const todo = Todo.build({ title, description })

//     await todo.save()

//     return res.status(201).send(todo)

//     // return res.send('new todo created')
// })

// export { router as TodoRoutes }