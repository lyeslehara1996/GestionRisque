import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/_services/AuthService/auth-service.service';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { Router } from '@angular/router';
import{ Observable } from 'rxjs';


import { AppUser } from '../Models/AppUser'

declare var $: any;
@Component({
  selector: 'app-app-page-home',
  templateUrl: './app-page-home.component.html',
  styleUrls: ['./app-page-home.component.css']
})
export class AppPageHomeComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage !:string[];
  submitted:boolean = false;


  constructor(private authService:AuthServiceService,private storageSService:StorageSService ,private router:Router) {}
   
  public LoginForm!: FormGroup;
  ngOnInit(): void {
 
    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.storageSService.getToken() && this.storageSService.isLoggedIn() === true) {
      this.isLoggedIn === true;
      this.isLoginFailed === false;
      this.router.navigateByUrl('/Admin');
    }else{
      this.storageSService.signOut();
      this.router.navigate(['/Home']);
      this.isLoggedIn===false
      this.isLoginFailed===true

      
   
    }

  
  }

    
 

  
  onSubmit() {

this.submitted= true;
    
    this.authService.Login(this.LoginForm.value['username'],this.LoginForm.value['password']).subscribe(
      (Response:any)=>{
   
        this.storageSService.saveToken(Response.jwtAccessTocken);
        this.storageSService.saveUser(Response);
        console.log(this.storageSService.getUser())
        this.isLoginFailed ===false;
        this.isLoggedIn === true;
        if(this.storageSService.getToken() && this.storageSService.isLoggedIn() === true ){
          this.router.navigateByUrl('/Admin')
  
          
        }

      },
      (error)=>{
     
       this.errorMessage = error.error
      console.log(this.errorMessage)
        this.isLoginFailed === true;
        this.isLoggedIn === false;
      

      
      }
    )
  }


// onSubmit(){
//   this.submitted= true;

//   const payloads = {
//     username: this.LoginForm.value['username'],
//     password: this.LoginForm.value['password']
//   };
 
//  this.authService.Login(this.LoginForm.value['username'],this.LoginForm.value['password']).subscribe(
//   ()=>{
//     this.store.dispatch(new LogIn(<AppUser>{
//       username: this.LoginForm.value['username'],
//       password: this.LoginForm.value['password']
//     }));
    
//   }
//   )

// }


  reloadPage(): void {
    window.location.reload();
  }



  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };

}
