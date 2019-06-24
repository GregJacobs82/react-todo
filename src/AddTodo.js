import React, { Component } from 'react';



class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">add_circle_outline</i>
                        <input type="text" name="new-todo" id="new-todo" onChange={this.handleChange} value={this.state.content} className="autocomplete"/>
                        <label for="new-todo">Add new todo:</label>
                    </div>                    
                </form>
            </div>
        )
    }
}

export default AddTodo;