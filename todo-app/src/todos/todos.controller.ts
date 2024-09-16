import { Body, Controller,Get,Post,Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/interfaces/todos.interfaces';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService){}

    @Get()
    findAll(): Todo[]{
        return this.todosService.findAll();
    }

    @Post()
    creatTodo(@Body() newTodo){
        console.log('newTodo',newTodo);
        this.todosService.create(newTodo);
    }

    @Get(':id')
    findOne(@Param('id') id : string){
        console.log('id', id)
        return this.todosService.findOne(id);
    }


}
