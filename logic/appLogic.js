import createTodo from '../models/todo.js';
import createProject from '../models/project.js';

const appLogic = (() => {
  const projects = [];
  const defaultProject = createProject('Default');
  projects.push(defaultProject);

  const addProject = (name) => {
    const project = createProject(name);
    projects.push(project);
    saveProjects();
  };

  const addTodoToProject = (title, description, dueDate, priority, notes, checklist, projectName) => {
    const todo = createTodo(title, description, dueDate, priority, notes, checklist);
    const project = projects.find(project => project.name === projectName) || defaultProject;
    project.addTodo(todo);
    saveProjects();
  };

  const saveProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const loadProjects = () => {
    const loadedProjects = JSON.parse(localStorage.getItem('projects'));
    if (loadedProjects) {
      projects.push(...loadedProjects);
    }
  };

  return { addProject, addTodoToProject, loadProjects };
})();

export default appLogic;
