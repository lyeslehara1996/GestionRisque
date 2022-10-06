import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor() { }
public LoginForm!:FormGroup ;
  ngOnInit(){
 
    this.LoginForm =new FormGroup({
      username: new FormControl('', [ Validators.required,Validators.minLength(4), Validators.maxLength(10)]),
   password: new FormControl('',[Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.LoginForm.controls[controlName].hasError(errorName);
  }
  onSubmit(){
      console.log(this.LoginForm.value)
  }
}
