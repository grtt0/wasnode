// import { Request, Response } from 'express';
// import { Todo, ITodo } from '../models/Todo';

export class TodoController {
    async getTodos(req, res){
        // const todos = await Todo.find();
        res.json({ "todos": [] });
    }
    // async getTodo(req, res){
    //     const todo = await Todo.find({ todoId: req.params.id });
    //     res.json({ todo });
    // }
    // async createTodo(req, res){
    //     // const { title, description } = req.body;

    //     const newTodo = new Todo(req.body);

    //     await newTodo.save()

    //     res.json({ status: res.status, data: newTodo });
    // }
    // async updateTodo(req, res){
    //     const todo = await Todo.findOneAndUpdate({ todoId: req.params.id }, req.body);
    //     res.json({ status: res.status, data: todo });
    // }
    // async deleteTodo(req, res){
    //     await Todo.findOneAndDelete({ todoId: req.params.id });
    //     res.json({ response: "Todo deleted Successfully" });
    // }
}