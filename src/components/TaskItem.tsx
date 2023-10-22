import {FaTimes} from 'react-icons/fa'
import { TaskProps } from "../types/TaskProps"

const TaskItem = ({task , onDelete , onToggle}:TaskProps) => {
    return (
      <div className={`task ${task.finished ? "finished" : ""}`} onDoubleClick={()=> onToggle(task._id)}>
          <h3>{task.text} <FaTimes className='deleteIcon' onClick={()=>onDelete(task._id) }/> </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default TaskItem