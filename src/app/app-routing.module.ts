import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound.component';

const routes: Routes = [{ path: 'facebook', loadChildren: () => import('./facebook/facebook.module').then(m => m.FacebookModule) },
      { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path:'',redirectTo:'/facebook',pathMatch:'full'},
      {path:'**',component:PagenotfoundComponent} 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
