import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';

// Endpoints para las tareas (CRUD)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  async create(@Body('title') title: string) {
    return this.tasksService.create(title);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updates: { title?: string; completed?: boolean },
  ) {
    return this.tasksService.update(id, updates);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.tasksService.delete(id);
    return { message: 'Tarea eliminada correctamente' };
  }
}