import React from 'react';

const TodoDetailView = ({ todos, detailTodo, switchView }) => {
    return (
        <div className="container">
            <h1>List of Todos</h1>
            <button onClick={switchView} className="btn btn-primary mt-2">
                Back...
            </button> <hr />

            {todos.map((todo) => (
                <div className="todo" key={todo.id}>
                    <div onClick={() => (detailTodo(todo.id))} className="content">
                        <div>
                            <h4>Todo: {todo.id}</h4>
                        </div>
                        <div>
                            {todo.content}
                        </div>

                    </div>
                </div>
            ))}


        </div>
    );
}


export default TodoDetailView;