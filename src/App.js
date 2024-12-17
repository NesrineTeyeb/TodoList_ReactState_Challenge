import React, { Component } from "react";
import AddTask from "./AddTask";
import TodoList from "./TodoList";
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  //la fonction add task qu'on a utilisé dans AddTask.js et qui permet d'ajouteer une nouvelle tache
  addTask = (newTask) => {
      this.setState({ tasks: [...this.state.tasks, newTask] });
  };
  //la fonction delete task qu'on a utilisé dans Todo.js et qui permet d'effacer une tache
  deleteTask = (taskId) => {
    this.setState((prevState)=>({
      tasks: prevState.tasks.filter((task) => task.id !== taskId)//si task.id est différent de taSkID(L4id de la tache qu'on veut effacer) on garde la tache si elles sonts égales on supprime
    }))
  };
  //la finction edit task qu'on utilisé dans Todo.js et qui permet de modifier la tache en utilisant le taskID
  editTask = (taskId, newText) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        return task.id === taskId ? { ...task, text: newText } : task;//teste si task.id est égale à taskId (l'id de la tache qu'on veut modifier) on le modifier par newtext
      }),
    }));
  };

  render() {
    return (
      <div>
        <h1>To Do List </h1>
        <AddTask addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
      </div>
    );
  }
}

export default App;
