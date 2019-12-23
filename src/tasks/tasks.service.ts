import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.interface';

@Injectable()
export class TasksService {
    tasks: Tasks[] = [
        {
            id: 1,
            name: "estudiar",
            description: "debo estudiar",
            active: true
        },
        {
            id: 2,
            name: "estudiar",
            description: "debo estudiar",
            active: true
        },
        {
            id: 3,
            name: "estudiar",
            description: "debo estudiar",
            active: true
        }
    ];

    getTasks(): Tasks[] {
        return this.tasks;
    }

    getTask(id): Tasks {
        return this.tasks.find(tasks => tasks.id === id);
    }
}
