import React from 'react';
import { useState } from 'react';
import { BsTrash } from "react-icons/bs";

interface IProps{
    id: number,
    title: string,
    handleRemove: (id:number) => void
}

const TodoItem = ({title, id, handleRemove}:IProps) => {

    const [done, setDone] = useState<boolean>(false)
    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDone(e.target.checked)
    }
    return (
        <div className="todo-item mt-3 p-4 rounded">
            <div className="todo-item-container d-flex justify-content-between">
                {
                    done &&
                    <s>
                        <input className="form-check-input hover-pointer" checked={done} onChange={handleCheck} type="checkbox" value="" id="flexCheckDefault"/> {title}
                    </s>
                }
                { 
                    !done &&
                    <h6>
                        <input className="form-check-input hover-pointer" checked={done} onChange={handleCheck} type="checkbox" value="" id="flexCheckDefault"/> {title}
                    </h6>
                }
                <BsTrash color="orangered" onClick={() => handleRemove(id)} className="hover-pointer"></BsTrash>
            </div>
        </div>
    );
};

export default TodoItem;