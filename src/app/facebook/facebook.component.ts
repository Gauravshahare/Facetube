import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FacebookService } from '../core/facebook.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit{
  users$:Observable<User[]>=this.facebookService.users$
  .pipe(
    catchError(err => {this.errorMessage=err;
      return EMPTY;
      })
    )
    // user$:Observable<User>=this.facebookService.users$
    // .pipe(
    //   map(user=>
    //     user.filter(user=>user.id===1)[0])
    // )

  errorMessage:string="";
  constructor(private facebookService:FacebookService) { }
  ngOnInit(): void {
    this.facebookService.getUser(1);
  }
}
