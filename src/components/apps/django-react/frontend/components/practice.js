import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class PracticeReact extends React.Component {
    constructor(props) {
        super(props)

        // this.handleClick = this.state.handleClick.target.bind(this)
    }
    state = {
        name: "Lagu",
        age: 38


    }
    handleClick(e) {
        console.log(e.target, e.pageX)
        console.log(this.state.name)// throws err because the function has not bound

    }

    // handleClick = (e) => {
    //     console.log(e.target, e.pageX)
    //     console.log(this.state.name)

    // }
    render() {
        return (
            <div className="container">
                <h1>Practice React Skills Here</h1>
                <hr />
                <p>My name is {this.state.name} and I am {this.state.age}</p>

                <button onClick={this.handleClick}>Click me </button>


            </div>
        );
    }
}

export default PracticeReact; 