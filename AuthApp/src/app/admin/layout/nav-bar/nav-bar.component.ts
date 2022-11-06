import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/Models/AppUser';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  isLoggedIn = true;
  roles: string[] = [];
  username ?:string;
  errorMessage = '';
  users ?:any|null=null 

  constructor(private router:Router, private storageSer:StorageSService,private userService:UserService) { }
  public AddUsersForm!: FormGroup;
  ngOnInit(): void {
    this.roles=this.storageSer.getUser().privileges;
    this.username=this.storageSer.getUser().username;

    this.AddUsersForm = new FormGroup({
      nom: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),


      prenom: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      roles: new FormControl('', [
        Validators.required,
      ]),

    });
    
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.AddUsersForm.controls[controlName].hasError(errorName);
  };



  onLoggedout() {
    if(this.isLoggedIn == true){
      this.storageSer.signOut();
      this.router.navigate(['/Signin']);
      this.isLoggedIn=false
    }else{
      this.storageSer.signOut();
      this.router.navigate(['/Signin']);
    }
  }


  onShowUsers(){
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users=data;
        console.log(this.users)
      },
      (error)=>{
        error;
      }
    )
  }


  onAddUsers(){


  }

  onShowRoles(){

  }




}
