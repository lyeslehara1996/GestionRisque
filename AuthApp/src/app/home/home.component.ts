import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../_services/AuthService/auth-service.service';
import { StorageSService } from '../_services/storageService/storage-s.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService:AuthServiceService,private storageSService:StorageSService,private router:Router) {}
  public LoginForm!: FormGroup;

  ngOnInit() {
    
    this.LoginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      password: new FormControl('', [Validators.required]),
    });

    if (this.storageSService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.storageSService.getUser().roles;
    }
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    this.authService.Login(this.LoginForm.value).subscribe(
      (Response:any)=>{
        console.log(Response)
        this.storageSService.saveToken(Response.jwtAccessTocken);
        this.storageSService.saveRefreshToken(Response.jwtRefreshToken );
        this.storageSService.saveUser(Response);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageSService.getUser().roles;
        if(this.roles[0]=='Admin'){
          this.router.navigateByUrl('/Admin')
        }
        //this.reloadPage();
      },
      (error)=>{
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    )
  }
  reloadPage(): void {
    window.location.reload();
  }
}