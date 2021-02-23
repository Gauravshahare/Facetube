import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser: User;
  constructor() { }
  login(userName: string, password: string): void {
    if (!userName || !password) {
      return;
    }
    if (userName === 'admin') {
      this.currentuser = {
        id: 1,
        userName: userName,
        isAdmin: true
      }
    }
    else {
      this.currentuser = {
        id: 1,
        userName: userName,
        isAdmin: true
      }
    }
    return;
  }

  logout(): void {
    this.currentuser = null;
  }
}
