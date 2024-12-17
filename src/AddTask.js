import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props){
        super(props);
        this.state={
            newTask:""
        }
    }
    //fonction pour permettre de modifier le champ input avec la valeur entrée par le clavier
    handleChange=(event)=>{
        this.setState({newTask: event.target.value})
    }
    //fonction pouur ajouter une tache dans tasks
    handleSubmit = (event) => {
      event.preventDefault();
      const newTask = {
        id: Date.now(), // Donne un ID unique
        text: this.state.newTask, // Le texte saisi par l'utilisateur
      };
      this.props.addTask(newTask); // Passe l'objet complet
      this.setState({ newTask: "" }); // Réinitialise l'input(vider le champ input aprés la saisie du task)
    };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.newTask} onChange={this.handleChange} placeholder='Enter a task'/>
        <button type="submit" >Add task</button>
      </form>
    )
  }
}

export default AddTask
