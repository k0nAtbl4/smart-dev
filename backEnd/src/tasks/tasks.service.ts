import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTasksDto } from './dto/create-task.dto';
import { UpdateTasksDto } from './dto/update-task.dto';
import { Tasks } from './entities/tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Tasks) private tasksRepository: Repository<Tasks> // ne rabotaet :(
    ) { }
    async create(createTasksDto: CreateTasksDto) {
        console.log('CreateTasksDto: ', CreateTasksDto);
        const tasks = this.tasksRepository.create(createTasksDto);
        await this.tasksRepository.save(tasks);
        return tasks;
    }
    async findAll() {
        return this.tasksRepository.find();
    }
    async findOne(id: number) {
        return await this.tasksRepository.findOne({ where: { id } });
    }
    async update(id: number, updateTasksDto: UpdateTasksDto) {
        return await this.tasksRepository.update(id, updateTasksDto);
    }
    async remove(id: number) {
        const toDelete = await this.tasksRepository.findOne({ where: { id } });
        return await this.tasksRepository.remove(toDelete);
    }
    async removeAll() {
        return await this.tasksRepository.clear();
    }
    //   async remove(id: number) {
    //     const toDelete = await this.projectTypeRepository.findOne(id);
    //     return await this.projectTypeRepository.remove(toDelete);
    //   }
    //   async removeAll() {
    //     return await this.projectTypeRepository.clear();
    //   }

}
