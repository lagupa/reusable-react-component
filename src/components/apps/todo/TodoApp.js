import React from "react";
import TodoListView from "./components/TodoListView";
import TodoDetailView from "./components/TodoDetails";
import AddTodo from "./components/addTodo";
import BtnGroup from "../../btnGroup";

class TodoAppHard extends React.Component {
  state = {
    todos: [
      { id: 1, content: "Meeting with Josh Lavine" },
      { id: 2, content: "Travelling to California on Monday" },
      { id: 3, content: "Coding the website of Red Card Movement" },
      { id: 4, content: "Dinner with Sweetheart" }
    ],
    TodoListView: true
  };

  addTodo = todos => {
    this.setState(state => ({
      todos: [...this.state.todos, todos]
    }));
  };

  detailTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id === id; // select the item
      //return todo.id !== id // delete item
    });
    this.setState({
      todos: todos
    });
  };

  switchView = () => {
    this.setState(state => ({
      TodoListView: !state.TodoListView
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="todoApp">
          {this.state.TodoListView ? (
            <div>
              <div className="form-content">
                <h3>Todo App</h3> <hr />
                <h5>
                  Manual hard coded todo app
                  <datalist />
                </h5>
                <br />
                <AddTodo addTodo={this.addTodo} btntext="Create" />
                <h4>List of Todos</h4>
                <hr />
              </div>

              <TodoListView
                todos={this.state.todos}
                detailTodo={this.detailTodo}
                switchView={this.switchView}
              />
            </div>
          ) : (
            <div>
              <TodoDetailView
                todos={this.state.todos}
                switchView={this.switchView}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TodoAppHard;
