import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { NbToastRef, NbToastrService } from '@nebular/theme';



@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {

  private index: number = 0;
  position = 'top-right';
  status = 'danger';
  message ='You must login';
  title ="Auth Failure";
  constructor(private auth: AuthService, public toastrService: NbToastrService,private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.toastAlert(this.status, this.position);
          this.router.navigate(['']);
        }
      })
    );
  }
  
  toastAlert(status, position){
    const toastRef: NbToastRef = this.toastrService.show(this.message, this.title, {status: status, position: position});
  }

}