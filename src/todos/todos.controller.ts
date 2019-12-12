import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todo: TodosService) {}

  @Get('')
  gettAllTodos() {
    return this.todo.gettAllTodos();
  }

  @Get('/active')
  gettAllActive() {
    return this.todo.gettAllActive();
  }

  @Get(':id')
  findTodo(@Param('id') id) {
    return this.todo.findTodo(id);
  }

  @Post('')
  createTodo(@Body() body) {
    const obj = {
      id: 1,
      name: body.name,
    };
    return obj;
  }
}
