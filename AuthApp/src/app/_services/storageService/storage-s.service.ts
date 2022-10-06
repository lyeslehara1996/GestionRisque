import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AppUser } from 'src/app/Models/AppUser';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class StorageSService {
  constructor() {}

  public signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(tocken: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, tocken);
  }

  public getJwt(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:any):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public  getUSer():any{
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
