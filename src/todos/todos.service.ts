import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  gettAllTodos() {
    return [
      {
        id: 1,
        name: 'chundo',
        active: true,
      },
      {
        id: 2,
        name: 'lauren',
        active: false,
      },
    ];
  }

  gettAllActive() {
    return [
      {
        id: 1,
        name: 'chundo',
        active: true,
      },
    ];
  }

  findTodo(id: string) {
    return {
      id,
      name: `chundo by id: ${id}`,
    };
  }
}
