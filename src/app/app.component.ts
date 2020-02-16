import { Component, OnInit } from '@angular/core';
import { faTrash,faCheck, IconDefinition, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import {LocalStorageProviderService} from './service/local-storage-provider.service';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:string = 'todo-demo';
  dateSelected:any;
  faTrash:IconDefinition= faTrash;
  faCheck:IconDefinition= faCheck;
  faCalendarDay:IconDefinition= faCalendarDay;
  addTodoText:string= '';
  todoList:Array<object>= [];

  addToDo:Function= this.addToDoImpl;
  deleteToDo:Function= this.deleteToDoImpl;
  checkToDo:Function= this.checkToDoImpl;
  dateChanged:Function= this.dateChangedImpl;

  //Function defination at the bottom, this improves readability and code understanding
  constructor(private localStorageProvider:LocalStorageProviderService, private calendar: NgbCalendar){
  }
  
  /**
   * @description Adds todo from input to the todolist
   */
  addToDoImpl(){
    const toDo={
      ifDone: false,
      text: this.addTodoText
    }
    this.todoList.unshift(toDo);
    this.addTodoText="";
    this.setTodoToLocalStorage(this.dateSelected);
  }
  /**
   * 
   * @param {number} ind Helps in deleting the todo based on index ind
   */
  deleteToDoImpl(ind:number){
    this.todoList.splice(ind,1);
    this.setTodoToLocalStorage(this.dateSelected);
  }
  
  /**
   * 
   * @param {number} ind This function will strike the selected todo to show that its done.
   */
  checkToDoImpl(ind:number){
    const checkedToDo= this.todoList[ind];
    this.todoList.splice(ind,1);
    checkedToDo['ifDone']=true;
    this.todoList.push(checkedToDo);
    this.setTodoToLocalStorage(this.dateSelected);
  }

  /**
   * Angular ngOnInit lifecycle hook
   */
  ngOnInit(){
    this.dateSelected = this.calendar.getToday();
    this.dateChangedImpl(this.dateSelected);
  }
  /**
   * @description Sets the todolist to localstorage
   */
  setTodoToLocalStorage(date:NgbDate){
    this.localStorageProvider.set(date, this.todoList);
  }
  /**
   * @description triggered when the date is changed.
   */
  dateChangedImpl(todoDate:NgbDate){
    const toDosFromStorage= this.localStorageProvider.get(todoDate);
    this.todoList=toDosFromStorage||[];
  }
}
