import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskHeader,
    ITaskDescription,
    ITaskFooter {
  priority?: string;
}
