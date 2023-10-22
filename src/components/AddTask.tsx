import e from "express"
import { useState } from "react"

interface AddTaskProps {
    onAdd: (obj:{text:string, day:string, finished:boolean}) => Promise<void>;
}

const AddTask = ({onAdd}:AddTaskProps) => {
    const [text,setText] = useState<string>("")
    const [day,setDay] = useState<string>("")
    const [finished,setFinished] = useState<boolean>(false)

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) : any => {
        e.preventDefault()

        if(!text){
            alert("please add task text")
        }
        else {
            onAdd({text,day,finished})
            setText("")
            setDay("")
            setFinished(false)
        }
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className='form-control'>
            <label>Day & Time</label>
            <input type="date" placeholder='Add Date' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>

        <div className='form-control form-control-check'>
            <label>Set Finished</label>
            <input type='checkbox'checked={finished} placeholder='Add Task' onChange={(e) => setFinished(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
    
  ) 
}

export default AddTask