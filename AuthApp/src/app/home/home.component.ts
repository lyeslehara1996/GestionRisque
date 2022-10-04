import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../_services/UserService/user.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthServiceService } from '../_services/AuthService/auth-service.service';
import { AppUser } from '../Models/AppUser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userFormGroup! :FormGroup;
  errorMessage: any;

  constructor(
    private authService:AuthServiceService,
    private  fb:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });

  }
  
  handleLogin(){
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;

  this.authService.login(username,password).subscribe({
    next :(appUser:AppUser) =>{
      this.authService.authenticationUsers(appUser).subscribe({
        next : (data)=>{
          this.router.navigateByUrl("/Admin")
        }
      });
    },
    error : (err)=>{
      this.errorMessage=err;
    }
  });
  }
}
