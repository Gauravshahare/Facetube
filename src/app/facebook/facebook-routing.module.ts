import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserResolverService } from './user-resolver.service';

const routes: Routes = [
  { path: '', component: FacebookComponent },
  {   path:'user-details/:id',
      component:UserDetailsComponent,
      resolve:{resolvedUser:UserResolverService}     
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
