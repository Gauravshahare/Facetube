import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.checkLoggedIn();
  }
  checkLoggedIn():boolean{
    if(this.authService.isLoggedIn){
      console.log('auth-guard',true);
      return true;
    }
    this.router.navigate['/login'];
    console.log('auth-guard',false);
    console.log('this.router.navigate["/login"]');
    return false;
  }
  
}
