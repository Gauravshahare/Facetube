import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddreesComponent } from './user-details/addrees/addrees.component';
import { CompanyComponent } from './user-details/company/company.component';


@NgModule({
  declarations: [FacebookComponent, UserDetailsComponent, AddreesComponent, CompanyComponent],
  imports: [
    CommonModule,
    FacebookRoutingModule
  ]
})
export class FacebookModule { }
