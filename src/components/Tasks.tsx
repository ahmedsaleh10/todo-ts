import { TasksProps } from "../types/TasksProps"
import TaskItem from "./TaskItem"
const Tasks = ({tasks , onDelete , onToggle}:TasksProps) => {

  return (
    <div>
        {tasks.map((task , index)=> {
            return(
                <TaskItem key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            )
        })}
    </div>
  )
}

export default Tasks