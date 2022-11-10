import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'app/Models/AppUser';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { UserService } from 'app/_services/UserService/user.service';
import { data } from 'jquery';
import { catchError, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
 // public users$?: Observable<HttpEvent<AppUser[]>> | null=null;
 users?: AppUser[]=[]; 
 constructor(private route:Router, private storage:StorageSService,private userService:UserService ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
      getAllUsers(){
        this.userService.getAllUsers().subscribe({
          next: ( data)  => {
    this.users = data;

      console.log(this.users);
          }

        })
      }
    
}


