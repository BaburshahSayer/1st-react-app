import React from "react"
import TodoListItem from "./TodoListItem"
import App from "./App"

var todoList = [
    <App props="TodoList" />
]
function TodoList() {
  return (
    <ul>
        {
        todoList.map((todo) => (
          <TodoListItem todo={todo} />
        ))
        }
    </ul>
  )
}