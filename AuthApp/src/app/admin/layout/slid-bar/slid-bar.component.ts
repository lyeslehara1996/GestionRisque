import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/Models/AppUser';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
import { UserService } from 'src/app/_services/UserService/user.service';
import { childRoutes } from '../../child-routes';

@Component({
  selector: 'app-slid-bar',
  templateUrl: './slid-bar.component.html',
  styleUrls: ['./slid-bar.component.scss']
})
export class SlidBarComponent implements OnInit {
  isLoggedIn = true;
  roles: string[] = [];
  errorMessage = '';
userlist!:AppUser[];
  showMenu = false;
  routes = childRoutes;
  constructor(private router:Router, private storageSer:StorageSService,private userService:UserService) { }

  ngOnInit(): void {
  this.roles= this.storageSer.getUser().roles;
  console.log(this.roles);

  }

  onShowUser(){
    this.userService.getUsers().subscribe(
 
    )
  }
}
