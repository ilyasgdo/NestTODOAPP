import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from 'src/dto/create-todo.dto';
import { Todo } from 'src/interfaces/todos.interfaces';

@Injectable()
export class TodosService {
     todos = [
        {
            id : 1,
            title: 'create a nest app',
            done: true,
            description: 'helloo guys'

        },
        {
            id : 2,
            title: 'buys bread ',
            done: false,
            description: 'hello'

        },
        {
            id : 3,
            title: 'learn REACT',
            done: false,
            description: 'hello nono'

        },
    ]


    findAll(): Todo[]{
        return this.todos;
    }

    create(todo: CreateTodoDto){
        this.todos = [...this.todos, todo as Todo];

    }

    findOne(id: string): Todo | undefined {
        for (const task of this.todos) { 
            if (task.id === Number(id)) { 
                return task;
            }
        }
        return undefined; 
    }
    
}
