import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';

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

  constructor(private router:Router, private storageSer:StorageSService) { }

  ngOnInit(): void {
    this.roles=this.storageSer.getUser().roles[0];
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


}
