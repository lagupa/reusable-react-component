import React from 'react';


const TodoListView = ({ todos, detailTodo, switchView }) => {
    return (
        <div className="list-of-todos">
            {todos.map((todo) => (todos.length > 0 ? (
                <div className="todo" key={todo.id}>
                    <div onClick={() => (detailTodo(todo.id))} className="content">
                        <div>
                            {todo.content}
                        </div>
                        <button onClick={switchView} className="btn btn-sm btn-primary mt-2 mb-3">
                            Details...
                    </button>
                    </div>
                </div>
            ) : (<div className="notodos">
                <h3>There are no todos</h3>
            </div>)))}
        </div>
    );
}

export default TodoListView;