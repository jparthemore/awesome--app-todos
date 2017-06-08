/*jshint esversion: 6*/
const mockTodo = {
  task:'get some milk',
  isComplete:false
};
const TodoApp = {
  rootElement: '#app',
  todos: [mockTodo],
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.addButton = this.root.querySelector('.add-button');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
   },
  bindEvents: function(){
    this.addButton.addEventListener('click',()=>console.log('add'));//dont need curly braces for one inline liner
  },
  render: function(){
    //const lis = this.todos.map(todo=>todo.task);
    //const list - this.todos.map(function(todo,index){});
    //console.log(lis);
    const lis = this.todos
                    .map(todo=>'<li>'+todo.task+ '</li>')
                    .join();
    this.todoList.innerHTML = lis;
    }

};
TodoApp.start();
