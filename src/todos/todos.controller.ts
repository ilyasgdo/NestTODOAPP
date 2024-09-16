import { Body, Controller,Get,Post,Param,Patch,Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/interfaces/todos.interfaces';
import { CreateTodoDto } from 'src/dto/create-todo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService){}

    @Get()
    findAll(): Todo[]{
        return this.todosService.findAll();
    }

    @Post()
    creatTodo(@Body() newTodo: CreateTodoDto){
        console.log('newTodo',newTodo);
        this.todosService.create(newTodo);
    }

    @Get(':id')
    findOne(@Param('id') id : string){
        console.log('id', id);
        return this.todosService.findOne(id);
    }

    @Patch(':id')
    udpdateTodo(@Param('id') id:string, @Body() todo: CreateTodoDto){
        console.log('newTodo',todo); 
        console.log('id', id);
        return this.todosService.update(id,todo);


    }

    @Delete(':id')
    deleteTodo(@Param('id') id:string  ){
        return this.todosService.delete(id);
    }


}
