import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [FacebookComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    FacebookRoutingModule
  ]
})
export class FacebookModule { }
