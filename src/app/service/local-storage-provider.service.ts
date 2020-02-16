import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageProviderService {

  constructor() { }
  /**
   * @param {string} context The key used to fetch data from localstorage
   * @returns The value from local storage
   */
  get= (context:NgbDate)=>{
    const key=this.getKeyFromContext(context);
    return JSON.parse(localStorage.getItem(key))||[];
    
  };

  /**
   * @param {string} context The key used to set value to localstorage
   * @param {object} value The value set against the key 
   */
  set= (context:NgbDate, value:object)=>{
    const key=this.getKeyFromContext(context);
    localStorage.setItem(key, JSON.stringify(value));
  }

  getKeyFromContext = (context:NgbDate)=>{
    return context.year+'-'+context.month+'-'+context.day;
  }
}
