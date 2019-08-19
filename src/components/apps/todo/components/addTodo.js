import React from 'react';

class AddTodo extends React.Component {
    state = {
        id: '',
        content: '',
    }
    handleChange = (e) => {
        this.setState({
            id: Math.random() * 10,
            content: e.target.value
        })
        //console.log(e.target.value)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        // to clear the value 
        this.setState({
            id: "",
            content: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className="form-control" placeholder="Enter todo here" type="text" required value={this.state.content} />
                    <button type="submit" className="btn btn-primary mt-2 mb-4 btn-sm">{this.props.btntext}</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;