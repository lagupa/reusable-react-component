import React from "react";
import axios from "axios";

class TodoAppApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res =>
      this.setState({
        todos: res.data.slice(0, 20)
      })
    );
  }

  render() {
    // console.log(this.state.todos);
    return (
      <div className="container">
        <div>
          <div className="mb-2 mt-4">
            <h4>App Read Me</h4>
            <p>
              This todo app fetches data from jsonplaceholder website using
              axios http request
            </p>

            <p>
              JSONPlaceholder is a free online REST API that you can use
              whenever you need some fake data. It's great for tutorials,
              testing new libraries, sharing code examples, ...
            </p>

            <h6>Check out the website</h6>
            <a href="https://jsonplaceholder.typicode.com/" target="_newtab">
              JSONPlaceholder, Fake REST API
            </a>
          </div>
          <br />
          <div>
            <h5>Home Work Todos</h5>
            <span>
              {this.state.todos.map(todo => (
                <div key={todo.id}>
                  <h4>Todo #0{todo.id}</h4>
                  <hr />
                  <p>{todo.title}</p>
                  <span>
                    {" "}
                    {todo.completed ? (
                      <h6>Completed:{" True"}</h6>
                    ) : (
                      <h6>Completed:{" False"}</h6>
                    )}
                  </span>
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoAppApi;
