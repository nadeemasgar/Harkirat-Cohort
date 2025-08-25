export function Todos({ todos, setTodos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={() => {
                fetch("http://localhost:3000/completed", {
                  method: "PUT",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(() => {
                  const updatedTodo = todos.map((t) => {
                    if (t._id === todo._id) t.completed = true;
                    return t;
                  });

                  setTodos(updatedTodo);
                  alert("Mark as completed");
                });
              }}
            >
              {todo.completed === true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
