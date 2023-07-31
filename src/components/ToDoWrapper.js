import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";
uuidv4()

export const ToDoWrapper = () => {
    
    const [todos, setTodos] = useState([])

    const addToDo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="todowrapper">
            <h1>To Do List!</h1>
            {/* addToDo = a function on top called addToDo, allows you to pass
            info to other files */}
            <ToDoForm addToDo={addToDo} />
            {/* just for jsx/js you want to use () instead of {} */}
            {/* () for implicit return, return directly from arrow function */}
            {/* {} for explicit return, return multiple elements, add more functions */}
            {todos.map((todo, i) => (
                <ToDo 
                    task={todo} 
                    key={i} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
            
        </div>
    )
}