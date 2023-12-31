/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.toDo = [];
  }

  add(todo){
    this.toDo.push(todo);
  }

  remove(indexOfTodo){
    this.toDo.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo){
    if(index < this.toDo.length && index >= 0)
      this.toDo[index] = updatedTodo;
    // else 
    //   throw new Error('Index Out Of Bounds Error');
  }

  getAll(){
    return this.toDo;
  }

  get(indexOfTodo){
    return this.toDo[indexOfTodo] || null;
  }

  clear(){
    this.toDo = [];
  }
}

module.exports = Todo;
