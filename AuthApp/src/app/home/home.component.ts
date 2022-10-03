import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from '../_services/UserService/user.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userFormgroup! :FormGroup;


  constructor(
    private userService:UserService,
    private  fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.userFormgroup = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    });

  }
  Login(loginForm:NgForm){
    console.log(loginForm.value)
    // this.userService.Login(loginForm.value).subscribe(
    //   (Response)=>{
    //     console.log(Response);
    //   },
    //     (error) =>{
    //       console.log(error);
    //     }
      
    // );
  }
}
