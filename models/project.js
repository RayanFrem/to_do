const createProject = (name) => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const removeTodo = (todoIndex) => {
    todos.splice(todoIndex, 1);
  };

  const getTodos = () => todos;

  return { name, addTodo, removeTodo, getTodos };
};
export default createProject;
