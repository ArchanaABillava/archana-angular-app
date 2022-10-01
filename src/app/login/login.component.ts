// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   Validators,
//   FormControl,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   isSubmitted: boolean = false;
//   isValidUser: boolean = false;
//   form: FormGroup = new FormGroup({});

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private authService: AuthService
//   ) {}

//   ngOnInit() {
//     this.form = this.fb.group({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required]),
//     });
//   }

//   onSubmit() {
//     this.authService
//       .login(this.form.value.email, this.form.value.password)
//       .subscribe((data) => {
//         if (data) {
//           this.router.navigate(['/deals']);  // If valid and route to card
//         }
//         this.isSubmitted = true;
//         this.isValidUser = data; // false show error message
//       });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Form,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  //Authenticate user details from userapi
  userapi=environment.userapi;
  adminapi=environment.adminapi;
  submitted = false;
  get f() { return this.loginForm.controls; }
  //constructor injection
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,
      private userService: UserService ,private adminService: AdminService) { }
  
    ngOnInit(): void {
      this.userService.validateAuth(false);
      this.adminService.validateAdmin(false); //data parameter in your userservice
      this.loginForm = this.formBuilder.group({
        useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
          });
    }
    login(){
      this.submitted = true;
      if (this.loginForm.invalid) {
        return ;
      }
      this.http.get<any>(this.userapi)
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
        });
        this.http.get<any>(this.adminapi).subscribe(res => {
          const admin = res.find((a: any) => {
            if(this.loginForm.value.useremail=="admin@gmail.com" && this.loginForm.value.password=="admin123"){
              return true
            }
            else{
              return false
            }
          });
        if(user){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
      
          Toast.fire({
            icon: 'success',
            title: 'Login Successful'
          })
          this.loginForm.reset();
          this.router.navigate([''])
          this.userService.validateAuth(true);
        }
        else if(admin){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1000,
          })
  
          Toast.fire({
            icon: 'success',
            title: 'Login Successful!!!'
          })
          this.loginForm.reset();
          this.router.navigate([''])
          this.adminService.validateAdmin(true);
        }
        else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
      
          Toast.fire({
            icon: 'error',
            title: 'User not found'
          })       
          this.userService.validateAuth(false);
          this.adminService.validateAdmin(false);
        }
      })
    })
    }
  }
  