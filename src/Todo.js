import React, { Component } from "react";

export class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      isEditing:false, //variable pour activer/désactiver Editing
      editedTaskText: this.props.task.text //pour avoir la tâche en cours comme valeur par défaut
    }
  }
  //fonction toggle edit
  toggleEdit=()=>{
    this.setState({isEditing: !this.state.isEditing});
  };
  //handle Change: pour modifier la tache
  handleChange=(event)=>{
    this.setState({editedTaskText: event.target.value})// editedTaskText va prendre la valeur saisie par l'utilisateur(clavier)
  }
  // fonction pour l'édition
  handleEdit=()=>{
    this.setState({isEditing: true})
  }
  //fonction pour enregistrer les modifications d'une tâche
  handleSave = () => {
    this.props.editTask(this.props.task.id, this.state.editedTaskText);
    this.setState({ isEditing: false });
  };
  //fonction pour supprimer une tache par id
  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };
  render() {
    return (
        <li>
          {/* test si isEditing true on ajoute le boutton save et le text input pour pouvoir changer le texte de notre tache */}
          {this.state.isEditing ? (
            <div>
              <input type="text" value={this.state.editedTaskText} onChange={this.handleChange} />
              <button onClick={this.handleSave}> Save </button>
              <button onClick={this.handleDelete}> Delete </button> 
            </div>
          ):(
             /*{ Si isEditing est false on a juste l'affichage de la tache avec bouton edit et bouton delete}*/
            <div>
              {this.props.task.text}
              <button onClick={this.handleEdit}>Edit </button>
              <button onClick={this.handleDelete}>Delete </button>
            </div>
          )
            
          }
        </li>
    );
  }
}

export default Todo;
