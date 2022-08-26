type Image = string
type Role = 'Admin' | 'Moderator' | 'User' 
interface User {
    name: string
    surname: string
    age: number
    link?: string
    password: string
    photo?: Image
    role: Role[]
    points: number
    rank: number
    submitTasks: number
    submission: TaskSubmission[]
    }
type Code = {
    text: string
    language: 'js' | 'ts'
}
type Opinion = 'like' | 'dislike'
type TaskSubmission = {
    user: User
    task: Task
    status: TaskSubmissionStatus
    code: Code
    opinion?: Opinion
}
type TaskSubmissionStatus = 'success' | 'fail'
interface Task{
    users: TaskSubmission[]
    tests: Code
    description: string
    level: number
    startCode: Code[]
    
}