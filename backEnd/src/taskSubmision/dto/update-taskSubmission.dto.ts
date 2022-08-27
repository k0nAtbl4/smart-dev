import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskSubmissionDto } from './create-taskSubmission.dto';

export class UpdateTaskSubmissionDto extends PartialType(CreateTaskSubmissionDto) { }
