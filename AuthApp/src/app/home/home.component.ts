import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthServiceService } from '../_services/AuthService/auth-service.service';
import { AppUser } from '../Models/AppUser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userFormGroup! :FormGroup;
  errorMessage: any;

  constructor(
  
    ) { }

  ngOnInit(): void {
   

  }

}
