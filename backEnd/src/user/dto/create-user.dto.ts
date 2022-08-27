import { TaskSubmission } from "src/taskSubmision/entities/taskSubmission.entity"

export class CreateUserDto {
    name: string;

    surname: string;

    age: number;

    link?: string;

    password: string;

    photo?: string;

    role: string;

    points: number;

    rank: number;

    submitTasks: number;

    submission: TaskSubmission[];

}

// export class User {

//     @OneToMany(type => Tasks, (task) => task.users, { eager: true })
//     users: TaskSubmission[]
// }