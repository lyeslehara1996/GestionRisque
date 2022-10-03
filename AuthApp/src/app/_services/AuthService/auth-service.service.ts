import { Injectable } from '@angular/core';
import { AppUser } from 'src/app/Models/AppUser';
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
users :AppUser[] =[]
  constructor() { 
    this.users.push({userid:"1",username:"user1",password:"1234",roles:["Admin"]})

  }


}
