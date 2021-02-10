import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, UserResolved } from '../../models/user.interface';

@Component({
  selector: 'address',
  templateUrl: './addrees.component.html',
  styleUrls: ['./addrees.component.css']
})
export class AddreesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  add: Address;
  errorMessage: string;

  ngOnInit(): void {

    this.route.parent.data.subscribe(
      data => {
        let resolvedUser:UserResolved = data['resolvedUser'];
        this.errorMessage = resolvedUser.error;
        this.onUserRetrived(resolvedUser.user.address);
      }
    )


  }
  onUserRetrived(add: Address) {
    this.add = add;
  }

}
