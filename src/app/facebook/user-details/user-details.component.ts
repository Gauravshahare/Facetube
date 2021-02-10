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

  user:User;
  errorMessage:string;
  
  constructor(private route:ActivatedRoute,
              private facebookService:FacebookService) { }
              
  ngOnInit(): void {
    
    this.route.data.subscribe(
        data=>{
            let resolvedUser=data['resolvedUser'];
            this.errorMessage=resolvedUser.error;
            this.onUserRetrived(resolvedUser.user);
          }
    )    
  }
  onUserRetrived(user:User){
    this.user=user;
  }
 
  }


  

