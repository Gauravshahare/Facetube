import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../facebook/models/user.interface';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, single, tap,map, concatAll } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      tap(data => console.log("facebook data service getUser", data)),
      catchError(this.handleError)
    )

  getUser(userid:number){
    return this.users$
    .pipe(
      map(user=>
        user.filter(user=>user.id===userid)[0])
    )
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else {
      errorMessage = `Backend returned code ${err.status} : ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage)
  }



  constructor(private http: HttpClient) { }
}
