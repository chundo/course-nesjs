import { Controller, Post, Body } from '@nestjs/common';
import { CreateRoleDto } from 'src/roles/roles.dto';

@Controller('tasks')
export class TasksController {
  @Post('')
  createTodo(@Body() task: CreateRoleDto) {
    console.log(task)
    return task;
  }
}
