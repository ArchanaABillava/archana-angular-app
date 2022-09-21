//import { Component, OnInit } from '@angular/core';
///Form elements - Design
//import { FormGroup, FormControl } from '@angular/forms';
///Validation
//import {Validators} from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   constructor() { }

//   //Properties for the form and form elements/controls
//   myForm: FormGroup | any;
//   username: FormControl | any;
//   useremail: FormControl | any;
//   password: FormControl | any;
//   mobile: FormControl | any;

//   ngOnInit(): void {
//     this.username = new FormControl('', [Validators.required,Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)]);
//     this.useremail = new FormControl('', [Validators.required]);
//     this.password = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)]);
//     this.mobile = new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]);
//     this.myForm = new FormGroup({
//       'username': this.username,
//       'useremail': this.useremail,
//       'password': this.password,
//       'mobile': this.mobile
//     })
//   }

//   //Event for the button
//   onSubmit()
//   {
//     console.log(this.myForm);
//   }


//}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //public registerForm!:FormGroup;
  userurl = environment.userapi;
  registerForm = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl('')
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      useremail: ['', Validators.required],
      password: ['', Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)],
      mobile: ['', Validators.required, Validators.pattern('[0-9]*')]
    });
  }
  get f() { return this.registerForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.userurl, this.registerForm.value)
      .subscribe(res => {
        alert("signUp Successful");
        this.registerForm.reset();
        this.router.navigate(['login']);
      })

  }

}
