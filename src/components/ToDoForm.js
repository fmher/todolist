import React, { useState } from "react";

export const ToDoForm = ({addToDo}) => {

    const [value, setValue] = useState("")

    const handleSubmit = e => {
        // this prevents page from refreshing
        e.preventDefault();

        addToDo(value)
        // console.log('this is value -', value)
        setValue("")
    }

    return (
        <form className="todoform" onSubmit= {handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                value= {value}
                placeholder="What are you doing today?" 
                onChange= {(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn" >
                Add Here!
            </button>

        </form>
    )
}