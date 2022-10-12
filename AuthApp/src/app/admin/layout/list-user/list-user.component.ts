import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/UserService/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }


 
}
