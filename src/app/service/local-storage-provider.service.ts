import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageProviderService {

  constructor() { }
  /**
   * @param {string} context The key used to fetch data from localstorage
   * @returns The value from local storage
   */
  get= (context:string)=>{
    switch (context){
      case 'todo':
        return JSON.parse(localStorage.getItem(context))||[];
    }
  };

  /**
   * @param {string} context The key used to set value to localstorage
   * @param {object} value The value set against the key 
   */
  set= (context:string, value:object)=>{
    localStorage.setItem(context, JSON.stringify(value));
  }
}
