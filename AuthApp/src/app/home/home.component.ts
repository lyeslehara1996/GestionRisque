import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../_services/AuthService/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private authService:AuthServiceService) {}
  public LoginForm!: FormGroup;

  ngOnInit() {
    
    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };

  onSubmit() {

  }
}