import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myReactiveForm!: FormGroup;
  count = false;
constructor(private _router: Router){}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,[Validators.required]),

    })
  }
wrongUser = false;
  onSubmit(){

    this.count = true;
    console.log(this.myReactiveForm.status);


    if(this.myReactiveForm.value.password==="ankit" && this.myReactiveForm.value.email==="ankit@gmail.com"){
   
      
        this._router.navigateByUrl('/users');
    };
    if(this.myReactiveForm.value.password!=="ankit" && this.myReactiveForm.value.email!=="ankit@gmail.com"&&this.myReactiveForm.status==='VALID'){
   
      
       this.wrongUser = true;
  };


  
   
  }


}
