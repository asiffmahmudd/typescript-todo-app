import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import TodoItem from './TodoItem';

interface ITask{
    id: number,
    title: string
}

const Todo = () => {

    const [task, setTask] = useState<ITask>({} as ITask)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const addToList = () => {
        if(task.title === ""){
            alert("Please enter something")
        }
        else{
            setTodoList([...todoList,task])
            setTask({
                id: NaN,
                title:""
            })
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newTask = {
            id: todoList.length,
            title: e.target.value
        }
        setTask(newTask)
    }

    const handleRemove = (id:number) =>{
        const newList = todoList.filter(item => item.id !== id)
        setTodoList(newList)
    }

    return (
        <div className="todo pt-5 pb-5">
            <div className="todo-container">
                <div className="header">
                    <h5>Things to do</h5>
                </div>
                <div className="todo-body text-center">
                    <div className="todo-item-container d-flex justify-content-center flex-column align-items-center">
                        {
                            todoList.map((item,index) => <TodoItem key={index} id={item.id} title={item.title} handleRemove={handleRemove}></TodoItem>)
                        }
                    </div>
                    <div className="input-group p-3">
                        <input 
                            type="text" 
                            id="task" 
                            name="task"
                            onChange={handleChange} 
                            onBlur={(e) => e.target.value = ""}
                            className="form-control" 
                            placeholder="Task description"
                        />
                    </div>
                    <div className="btn-container text-center">
                        <button className="btn" onClick={addToList}><AiOutlinePlus style={{marginTop:'-3px'}}></AiOutlinePlus> Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;