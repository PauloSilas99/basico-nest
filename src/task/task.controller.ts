import { Body, Controller, Param, Post, Get, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService:TaskService){}

    @Post()
    create(@Body() task:TaskDto){
        this.taskService.create(task)
    }

    @Get('/:id')
    findById(@Param('id') id:string ){
        this.taskService.findById(id)
    }

    @Put()
    update(@Body() task:TaskDto){
        this.taskService.upDate(task)
    }
}
