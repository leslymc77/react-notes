import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(){
        super();
    }

    handleRemove(id) {
        const response = window.confirm('Estas seguro de eliminar?')
        if (response){
            this.props.removeNote(id);
        }
        return;        
    }

    render(){
        return(
            <div className="Note">
                <span
                    onClick={() => this.handleRemove(this.props.noteId) }
                    >&times;</span>
                <p>{this.props.noteContent}</p>
            </div>
        );
    }
}

export default Note;