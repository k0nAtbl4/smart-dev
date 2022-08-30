import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './entities/tasks.entity';
import { TasksController } from './tasks.contoller';
import { TaskService } from './tasks.service';

@Module({
    imports: [TypeOrmModule.forFeature([Tasks])],
    controllers: [TasksController],
    providers: [TaskService]
})
export class ProjectTypeModule { }
