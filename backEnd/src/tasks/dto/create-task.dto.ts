import { TaskSubmission } from "src/taskSubmision/entities/taskSubmission.entity";
type Code = {
    text: string
    language: 'js' | 'ts'
}
export class CreateTasksDto {

    users: TaskSubmission[]

    tests: Code;

    startCode: Code;

    name: string;

    description: string;

}
