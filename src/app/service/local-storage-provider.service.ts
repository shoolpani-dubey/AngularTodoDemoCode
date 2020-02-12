import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageProviderService {

  constructor() { }

  get= (context:string)=>{
    switch (context){
      case 'todo':
        return JSON.parse(localStorage.getItem(context))||[];
    }
  };

  set= (context:string, value:object)=>{
    localStorage.setItem(context, JSON.stringify(value));
  }
}
