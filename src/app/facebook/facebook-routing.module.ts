import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: FacebookComponent },
  {path:'user-details/:id',component:UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
