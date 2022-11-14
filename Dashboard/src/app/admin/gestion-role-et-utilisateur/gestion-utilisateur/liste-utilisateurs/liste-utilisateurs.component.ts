import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from 'app/Models/AppUser';
import { User } from 'app/Models/User.model';
import { StorageSService } from 'app/_services/storageService/storage-s.service';
import { UserService } from 'app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'app/_States/state';
import { data } from 'jquery';
import { catchError, map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-liste-utilisateurs',
  templateUrl: './liste-utilisateurs.component.html',
  styleUrls: ['./liste-utilisateurs.component.css']
})
export class ListeUtilisateursComponent implements OnInit {
  
  readonly DataStateEnum = DataStateEnum;
 public users$?: Observable<AppDataState<AppUser[]>> | null=null;
  //users?: any;
  constructor(private route: Router, private storage: StorageSService, private userService: UserService) { }

  ngOnInit(): void {

    this.getAllUsers();
  }

  getAllUsers() {
    this.users$=
    this.userService.getAllUsers().pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}

onUpdateUser(user:AppUser){
  this.route.navigate(['/Admin/GestionUtilisateur/ModifierDesUtilisateurs/'+user.id])
  // navigateByUrl('ModifierDesUtilisateurs/'+user.id)
}


onDeleteUser(user:AppUser){
  let v = confirm("vous voulez supprimer cet Utilisateur ");
  if(v===true)
  
  this.userService.DeleteUser(user).subscribe(data=>{
    this.getAllUsers();
  })
}
}


