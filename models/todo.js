const createTodo = (title, description, dueDate, priority, notes = '', checklist = []) => {
  return { title, description, dueDate, priority, notes, checklist };
};
export default createTodo;
