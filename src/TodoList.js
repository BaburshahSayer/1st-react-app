import React from "react"
import TodoListItem from "./TodoListItem"

export default function TodoList(props) {

  return (
    <ul>
      {props.todoList.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </ul>
  )
}