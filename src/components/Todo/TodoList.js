import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
//import Table from 'react-bootstrap/Table';

export const todoUrl = "https://jsonplaceholder.typicode.com/todos";
export const userUrl = "https://jsonplaceholder.typicode.com/users";



const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    async function retrieveTodos() {
      const todoResponse = await fetch(todoUrl);
      const userResponse = await fetch(userUrl);
  
      if (todoResponse.status === 500) {
        setHasError(true);
        return;
      }
  
      const todos = await todoResponse.json();
      const users = await userResponse.json();
  
      todos.forEach((todo) => {
        const user = users.find((user) => user.id === todo.userId);
        todo.user = user;
      });
  
      setTodos(todos);
    };
  ;retrieveTodos();
  }, [])



  return (
    <div style={{width:"100%"}}  >
      {hasError ? <div>Something went wrong</div> : null}
      <Table style={{textAlign:"center"}} striped bordered hover  variant="dark">
        <thead >
          <tr>
            <th>User Name</th>
            <th>Todo List</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td> {todo.user.name}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? <span>&#10004;</span> : ""}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;