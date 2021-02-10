import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, Company } from '../../models/user.interface';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Company;
  errorMessage: string;


  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.parent.data.subscribe(
      data => {
        let resolvedUser = data['resolvedUser'];
        this.errorMessage = resolvedUser.error;
        this.onUserRetrived(resolvedUser.user.company);
      }
    )
  }
  onUserRetrived(company:Company){
    this.company=company;
  }
}
