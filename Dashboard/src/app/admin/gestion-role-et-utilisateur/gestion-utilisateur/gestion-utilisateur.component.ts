import { Component, OnInit } from '@angular/core';
import { StorageSService } from 'app/_services/storageService/storage-s.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {

  constructor(private storageService : StorageSService) { }

  ngOnInit(): void {
  }

}
