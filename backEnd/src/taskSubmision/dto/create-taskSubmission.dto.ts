import { TaskSubmission } from "src/taskSubmision/entities/taskSubmission.entity";
import { User } from "src/user/entities/user.entity";

type Opinion = 'like' | 'dislike'
type taskSubmissionStatus = 'succuess' | 'fail'
type Code = {
    text: string
    language: 'js' | 'ts'
}

export class CreateTaskSubmissionDto {

    user: User;

    task: number;

    status: taskSubmissionStatus;

    code: Code;

    opinion?: Opinion

}