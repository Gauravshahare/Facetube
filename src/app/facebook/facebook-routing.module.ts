import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook.component';
import { AddreesComponent } from './user-details/addrees/addrees.component';
import { CompanyComponent } from './user-details/company/company.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserResolverService } from './user-resolver.service';

const routes: Routes = [
  { path: '', component: FacebookComponent },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    resolve: { resolvedUser: UserResolverService },
    children: [
      {
        path: '',
        redirectTo: 'address',
        pathMatch: 'full'
      },
      {
        path: 'address',
        component: AddreesComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
