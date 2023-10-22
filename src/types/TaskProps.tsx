import { Task } from "./Task";

export interface TaskProps {
    task: Task;
    onToggle: (id: number) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}