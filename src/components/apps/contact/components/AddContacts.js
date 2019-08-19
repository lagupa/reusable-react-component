import React from 'react'

class AddContacts extends React.Component {
    state = {
        id: "",
        name: "",
        email: "",
        note: ""

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addContact(this.state)

        //log the 
        console.log(this.state)

        //clear the form field
        this.setState({
            id: "",
            name: "",
            email: "",
            note: ""
        })

        // Make sure to add 'value={this.state.content}' to each input ocurrent 
        // content = value of the name attributes of the input/textarea etc
    }
    handleChange = (e) => {
        // this.setState({
        //     id: Math.random() * 10,
        //     name: e.target.value,
        //     email: e.target.value,
        //     note: e.target.value
        // })
        // //console.log("form submited")

        this.setState({
            id: Math.random() * 10,
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="mb-2 mt-4">
                    <h4>
                        Contact App
                    </h4>
                    <hr />
                    <h6>Add your contacts heres</h6>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="todos">
                        <input onChange={this.handleChange} name="name" type="text" className="form-control mt-3 mb-3" placeholder="Full name" required value={this.state.name} />
                        <input onChange={this.handleChange} name="email" type="email" className="form-control mt-3 mb-3" placeholder="Email" required value={this.state.email} />
                        <textarea onChange={this.handleChange} name="note" type="textarea" row="3" className="form-control mt-3 mb-3" placeholder="Note" required value={this.state.note}></textarea>
                        <button type="submit" className="btn btn-primary mt-3 mb-3">{this.props.btntext}</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default AddContacts;