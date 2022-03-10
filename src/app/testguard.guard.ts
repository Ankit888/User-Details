import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import { TestService } from './test.service';
@Injectable({
  providedIn: 'root'
})

export class TestguardGuard implements CanActivate  {
  constructor(private s : TestService){
    console.log(s.isUserLoggedIn);
  }

  canActivate(){
    
      return true;
  }  
}
