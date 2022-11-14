import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'app/Models/AppUser';
import { UserService } from 'app/_services/UserService/user.service';
import { AppDataState, DataStateEnum } from 'app/_States/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifier-utilisateurs',
  templateUrl: './modifier-utilisateurs.component.html',
  styleUrls: ['./modifier-utilisateurs.component.css']
})
export class ModifierUtilisateursComponent implements OnInit {
  
  id ?:number;
UserFormGroupe !: FormGroup;
submitted : boolean =false

  constructor(private userservice:UserService, private activateRoute:ActivatedRoute, private formBuilder:FormBuilder,private Route:Router) { 
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.userservice.getUser(this.id)
    .subscribe(users$=>{
    this.UserFormGroupe=  this.formBuilder.group({

    });
    });
  }

}
