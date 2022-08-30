import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-task.dto';
import { UpdateTasksDto } from './dto/update-task.dto';
import { TaskService } from './tasks.service';
// import { ProjectsService } from './projects.service';
// import { CreateProjectDto } from './dto/create-project.dto';
// import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) { }

  @Post()
  create(@Body() createTasksDto: CreateTasksDto) {

    return this.tasksService.create(createTasksDto);
  }
  //Content-Type
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTasksDto: UpdateTasksDto) {
    return this.tasksService.update(+id, updateTasksDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(parseInt(id, 10));
  }

  @Delete()
  async removeAll() {
    return await this.tasksService.removeAll();
  }
}
