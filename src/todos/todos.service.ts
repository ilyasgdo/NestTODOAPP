import { Injectable, NotFoundException } from '@nestjs/common';
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

    update(id: string, todo: Todo){
        //+id  c'est caster en number
       const todoToUpdate = this.todos.find(t => t.id === +id  );
       if(!todoToUpdate){
        return new NotFoundException("pas de todo de cette id ");
       }

       if(todo.hasOwnProperty('done')){
        todoToUpdate.done = todo.done;
       }
       if(todo.title){
        todoToUpdate.title = todo.title;
       }
       if(todo.description){
        todoToUpdate.description = todo.description;
       }

       const updatedTodos = this.todos.map(t=> t.id !== +id ? t: todoToUpdate );
       this.todos= [...updatedTodos];
       return {updatedTodo : 1 , todo: todoToUpdate};

    }

    delete(id : string){
        const nbOfTodosBeforDelete = this.todos.length;
                //+id  c'est caster en number

                //... c'est recuperer chaque element tab 
        this.todos = [...this.todos.filter(t => t.id !== +id)];
        if(this.todos.length < nbOfTodosBeforDelete){
            return {deletedTodos : 1 , nbTodos: this.todos.length};

        }else{
            return {deletedTodos : 0 , nbTodos: this.todos.length};

        }
    }
    
}
