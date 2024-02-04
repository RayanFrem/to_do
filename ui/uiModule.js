import appLogic from '../logic/appLogic.js';

const uiModule = (() => {
  const projectListElement = document.querySelector('#project-list');
  const todoListElement = document.querySelector('#todo-list');
  const addProjectForm = document.querySelector('#add-project-form');
  const addTodoForm = document.querySelector('#add-todo-form');

  const renderProjects = () => {
    const projects = appLogic.getProjects();
    projectListElement.innerHTML = projects.map(project => 
      `<li data-project-id="${project.id}">${project.name}</li>`
    ).join('');
  };

  const renderTodos = (projectId) => {
    const todos = appLogic.getTodosByProjectId(projectId);
    todoListElement.innerHTML = todos.map(todo => 
      `<li data-todo-id="${todo.id}" class="todo-priority-${todo.priority}">
        <h3>${todo.title}</h3>
        <p>Due: ${todo.dueDate}</p>
      </li>`
    ).join('');
  };

  const bindAddProjectEvent = () => {
    addProjectForm.addEventListener('submit', e => {
      e.preventDefault();
      const projectName = e.target.elements['project-name'].value;
      appLogic.addProject(projectName);
      renderProjects();
    });
  };

  const bindAddTodoEvent = () => {
    addTodoForm.addEventListener('submit', e => {
      e.preventDefault();
      const todoDetails = {
        title: e.target.elements['todo-title'].value,
        description: e.target.elements['todo-description'].value,
        dueDate: e.target.elements['todo-duedate'].value,
        priority: e.target.elements['todo-priority'].value,
        projectId: e.target.elements['project-id'].value
      };
      appLogic.addTodo(todoDetails);
      renderTodos(todoDetails.projectId);
    });
  };

  const init = () => {
    appLogic.loadProjects();
    renderProjects();
    bindAddProjectEvent();
    bindAddTodoEvent();
  };

  return { init };
})();

export default uiModule;
