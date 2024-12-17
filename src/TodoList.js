import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, id) => (
          <Todo key={task.id} task={task} deleteTask={this.props.deleteTask} editTask={this.props.editTask} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
