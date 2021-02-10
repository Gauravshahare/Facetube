import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FacebookService } from '../core/facebook.service';
import { User, UserResolved } from './models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<UserResolved> {
  
  constructor(private facebookService:FacebookService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserResolved>  {
    const id=route.paramMap.get('id');
    if(isNaN(+id)){
      const message=`product id was not a number: ${id}`;
      console.error(message);
      return of({user:null,error:message})
    }
    return this.facebookService.getUser(+id)
            .pipe(
              map(user=>({user:user})),
              catchError(error=>{
                const message=`Retrival Error ${id}`;
                return of({user:null,error:message});  
              })
            ) 
  }
}
