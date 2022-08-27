// interface User {
//     name: string
//     surname: string
//     age: number
//     link?: string
//     password: string
//     photo?: Image
//     role: Role[]
//     points: number
//     rank: number
//     submitTasks: number
//     submission: TaskSubmission[]
//     }
import { Tasks } from "src/tasks/entities/tasks.entity";
import { TaskSubmission } from "src/taskSubmision/entities/taskSubmission.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    age: number;

    @Column()
    link?: string
    
    @Column()
    password: string;

    @Column()
    photo?: string; // image

    @Column()
    role: string; // Role[]

    @Column()
    points: number;

    @Column()
    rnak: number;

    @Column()
    submitTasks: number

    @OneToMany(type => User, (user) => user.submission, {eager: true})
    submission: TaskSubmission[]

    @OneToMany(type => Tasks, (task) => task.users , {eager: true})
    users: TaskSubmission[]
}