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

import { Tasks } from "src/tasks/entities/tasks.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

type taskSubmissionStatus = 'succuess' | 'fail'
type Code = {
    text: string
    language: 'js' | 'ts'
}

@Entity()
export class TaskSubmission {

    @Column()
    user: User;

    @Column()
    task: number // Task id, because only id memory < all task;

    @Column()
    status: taskSubmissionStatus;

    @Column()
    code: Code;

    @Column()
    opinion?: string

}