// type Code = {
//     text: string
//     language: 'js' | 'ts'
// }
// type Opinion = 'like' | 'dislike'
// type TaskSubmission = {
//     user: User
//     task: Task
//     status: TaskSubmissionStatus
//     code: Code
//     opinion?: Opinion
// }
// type TaskSubmissionStatus = 'success' | 'fail'
// interface Tasks{
//     users: TaskSubmission[]
//     tests: Code
//     description: string
//     level: number
//     startCode: Code[]

// }

import { Task } from "src/tasks/entities/tasks.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskSubmission {

    @Column()
    user: Users;

    @Column()
    task: Task;

    @Column()
    status: taskSubmissionStatus;

    @Column()
    code: string;

    @Column()
    opinion?: string

}