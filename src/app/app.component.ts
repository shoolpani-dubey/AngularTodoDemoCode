import { Component } from '@angular/core';
import { faTrash,faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'todo-demo';
  faTrash:IconDefinition= faTrash;
  faCheck:IconDefinition= faCheck;
  addTodoText:string= '';
  todoList:Array<object>= [];

  addToDo:Function= this.addToDoImpl;
  deleteToDo:Function= this.deleteToDoImpl;
  checkToDo:Function= this.checkToDoImpl;

  //Function defination at the bottom, this improves readability and code understanding
  addToDoImpl(){
    const toDo={
      ifDone: false,
      text: this.addTodoText
    }
    this.todoList.unshift(toDo);
    this.addTodoText="";
  }
  deleteToDoImpl(ind:number){
    this.todoList.splice(ind,1);
  }
  checkToDoImpl(ind:number){
    const checkedToDo= this.todoList[ind];
    this.todoList.splice(ind,1);
    checkedToDo['ifDone']=true;
    this.todoList.push(checkedToDo);
  }
}
