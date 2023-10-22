import { Task } from "./Task";

export interface TasksProps {
    tasks: Task [],
    onDelete: (id:number) => Promise<void>,
    onToggle: (id:number) => Promise<void>,
}