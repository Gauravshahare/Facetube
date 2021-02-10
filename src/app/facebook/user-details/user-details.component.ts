import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, observable, Observable, of } from 'rxjs';
import { FacebookService } from 'src/app/core/facebook.service';
import { User, UserResolved } from '../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

<<<<<<< HEAD
  user:User;
  errorMessage:string;
  
  constructor(private route:ActivatedRoute,
              private facebookService:FacebookService) { }
              
  ngOnInit(): void {
    const resolvedUser:UserResolved=this.route.snapshot.data['resolvedUser'];
    this.errorMessage=resolvedUser.error;
    this.onUserRetrived(resolvedUser.user);
  }
  onUserRetrived(user:User){
    this.user=user;
=======
  user$: Observable<User> = of();
  id1: number = 0;
  constructor(private route: ActivatedRoute,
    private facebookService: FacebookService) { }

  getUser(id: number) {
    this.user$ = this.facebookService.getUser(id);
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        const id=+params.get('id');
        this.getUser(id);
      }
    )

    // const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    // this.user$ = this.facebookService.getUser(1);
>>>>>>> 05df0d88d893af20b0d1bd3df18ea4ec54e82c91
  }

}
