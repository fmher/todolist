import React, { useState } from "react";

export const EditToDoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        // this prevents page from refreshing
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }

    return (
        <form className="todoform" onSubmit= {handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                value= {value}
                placeholder="Let's make an edit" 
                onChange= {(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn" >
                Update!
            </button>

        </form>
    )
}