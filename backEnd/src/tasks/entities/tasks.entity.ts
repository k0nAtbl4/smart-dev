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
// @OneToMany(() => Photo, (photo) => photo.user)
// photos: Photo[]

import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Task, (task) => task.users)
    users: Tasksubmission[]
    users: TaskSubmission[]

    @Column()
    name: string;

    @Column()
    description: string;

    // @ManyToOne(type => Project, project => project.tasks, { eager: true })
    // project: Project;
}
// type Image = string
// type Role = 'Admin' | 'Moderator' | 'User' 
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
// interface Task{
//     users: TaskSubmission[]
//     tests: Code
//     description: string
//     level: number
//     startCode: Code[]
    
// }


// import { Project } from "src/projects/entities/project.entity";
// import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class Task {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

//     @Column()
//     description: string;

//     @ManyToOne(type => Project, project => project.tasks, { eager: true })
//     project: Project;
// }