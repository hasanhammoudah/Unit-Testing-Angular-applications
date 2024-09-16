import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { id: 1, name: "Hasan Hammoudah" },
    {id:2,name:"Ismail Hammoudah"},

  ]
  constructor() { }


  getUsers() {
    return of(this.users);
  }
}
