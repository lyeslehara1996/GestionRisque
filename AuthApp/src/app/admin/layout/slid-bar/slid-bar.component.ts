import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageSService } from 'src/app/_services/storageService/storage-s.service';
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

  showMenu = false;
  routes = childRoutes;
  constructor(private router:Router, private storageSer:StorageSService) { }

  ngOnInit(): void {
  this.roles= this.storageSer.getUser().roles;
  console.log(this.roles);

  }

}
