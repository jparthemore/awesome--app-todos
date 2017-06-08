/*jshint esversion: 6*/

const TodoApp = {
  rootElement: '#app',
  todos: [],
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
    this.addButton.addEventListener('click',()=>this.addTodo());//dont need curly braces for one inline liner
  },
  addTodo: function(){
    //first grab task input value
    const taskValue = this.taskInput.value;
    //1b - validate that taskValue is actually'something'
    if(!taskValue){
      //alert('NO');
      return;
    }
    //2nd buld a todo object w/that value
    const todo = {
      task: taskValue,
      isComplete: false
    };
    //3 - add that toodo to todos array
    this.todos.push(todo);
    //4 - rerender
    this.render();
    //5 - clear input
    this.taskInput.value = '';
  },
  render: function(){
    //const lis = this.todos.map(todo=>todo.task);
    //const list - this.todos.map(function(todo,index){});
    //console.log(lis);
    const lis = this.todos
                    .map(todo=>`<li>${todo.task}</li>`)
                    .join('');
    this.todoList.innerHTML = lis;//be careful can lead to security vulnerabilities
    }

};
TodoApp.start();
