import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"

function useSemiPersistentState() {
  const initialTodolist = !JSON.parse(localStorage.getItem("savedTodoList")) ? [] : JSON.parse(localStorage.getItem("savedTodoList"))
  const [todoList, setTodoList] = useState(initialTodolist)
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  }, [todoList])
  
  return [todoList, setTodoList]
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) 
  {
    setTodoList([...todoList, newTodo])
  }	  
    }

    return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <TodoList todoList={todoList} />
      <p>{newTodo}</p>
      <TodoList />
    </>
  )


export default App 