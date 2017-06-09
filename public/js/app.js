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
    //this.addButton = this.root.querySelector('.add-button');
    this.createForm = this.root.querySelector('.create-form');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
   },
  bindEvents: function(){
    //this is so passe
    //this.addButton.addEventListener('click',()=>this.addTodo());//dont need curly braces for one inline liner
    this.createForm.addEventListener('submit',(event)=>this.addTodo(event));
  },
  addTodo: function(event){
    //console.log(event);
    event.preventDefault();
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
  cacheDeleteButtons: function(){
    this.deleteButtons = this.root.querySelectorAll('.delete');
    //console.dir(this.deleteButtons);
  },
  bindDeleteEvents: function(){
    this.deleteButtons.forEach((button,index)=>{
      button.addEventListener('click',()=>this.deleteTodo(index));
    });
  },
  deleteTodo: function(index){
    this.todos.splice(index,1);
    this.render();
  },
  render: function(){
    //const lis = this.todos.map(todo=>todo.task);
    //const list - this.todos.map(function(todo,index){});
    //console.log(lis);
    const lis = this.todos
                    .map(todo=>`<li>${todo.task}<button class='delete'>X</button></li>`)
                    .join('');
    this.todoList.innerHTML = lis;//be careful can lead to security vulnerabilities
    this.cacheDeleteButtons();
    this.bindDeleteEvents();
    }

};
TodoApp.start();
