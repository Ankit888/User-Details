import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as packageInfo from '../../data/data.json';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {
 //  dd : d;
 version = packageInfo;
 version1:any;
  constructor(private h1 : HttpClient,private l2 :LoginComponent) { }

  ngOnInit(): void {
    console.log("yes");
    //console.log(this.dd);
  }

  getData(){
    this.version1 = this.version.users;
    if(this.l2.myReactiveForm.status){
      console.log("a");
      return true;
    }
    else{
      console.log("b");
      return false;
    }
  }

  isUserLoggedIn(){
   console.log(this.l2.myReactiveForm.status + "service me");
  }

  
}
