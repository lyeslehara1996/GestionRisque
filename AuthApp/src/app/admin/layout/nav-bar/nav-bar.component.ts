import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.roles=this.storageSer.getUser().privileges;
    this.username=this.storageSer.getUser().username;
  }
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
    this.userService.getUsers().subscribe(
      (data)=>{
        this.users=data;
        console.log(this.users)
      },
      (error)=>{
        error;
      }
    )
  }

}
