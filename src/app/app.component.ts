import { Component, OnInit } from '@angular/core';
import { faTrash,faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {LocalStorageProviderService} from './service/local-storage-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'todo-demo';
  localStorageToDoContext:string= 'todo';
  faTrash:IconDefinition= faTrash;
  faCheck:IconDefinition= faCheck;
  addTodoText:string= '';
  todoList:Array<object>= [];

  addToDo:Function= this.addToDoImpl;
  deleteToDo:Function= this.deleteToDoImpl;
  checkToDo:Function= this.checkToDoImpl;

  //Function defination at the bottom, this improves readability and code understanding
  constructor(private localStorageProvider:LocalStorageProviderService){
  }
  addToDoImpl(){
    const toDo={
      ifDone: false,
      text: this.addTodoText
    }
    this.todoList.unshift(toDo);
    this.addTodoText="";
    this.setTodoToLocalStorage();
  }
  deleteToDoImpl(ind:number){
    this.todoList.splice(ind,1);
    this.setTodoToLocalStorage();
  }
  checkToDoImpl(ind:number){
    const checkedToDo= this.todoList[ind];
    this.todoList.splice(ind,1);
    checkedToDo['ifDone']=true;
    this.todoList.push(checkedToDo);
    this.setTodoToLocalStorage();
  }
  ngOnInit(){
    const toDosFromStorage= this.localStorageProvider.get(this.localStorageToDoContext);
    this.todoList=toDosFromStorage||[];
  }
  setTodoToLocalStorage(){
    this.localStorageProvider.set(this.localStorageToDoContext,this.todoList);
  }
}
