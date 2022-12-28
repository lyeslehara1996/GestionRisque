
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-de-recouverment',
  templateUrl: './action-de-recouverment.component.html',
  styleUrls: ['./action-de-recouverment.component.css']
})
export class ActionDeRecouvermentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Head:any=["Date","Agence","Id Client","Nom/Prenom/Raison social","Engagements","Impayés","Provisions","Intérets Réservé","Autre Frais et Intérets","Actions de Recouverments"  ]
  Data:any=[
    {
      date:"10/10/2021",
      agence:"BA",
      idClient:"1",
      Nom:"Client1",
      Prenom:"Client",
      RaisonSocial:"null",
      Engagements:"1",
      Impayes:"true",
      Provisions:"",
      Interets:"rien",
      AutreFrais:"null",
      ActionRecouverements:"false"
    },
    {
      date:"21/10/2022",
      agence:"BNA",
      idClient:"2",
      Nom:"Client2",
      Prenom:"Client",
      RaisonSocial:"null",
      Engagements:"2",
      Impayés:"true",
      Provisions:"",
      Intérets:"rien",
      AutreFrais:"null",
      ActionRecouverements:"false"
    },
    {
      date:"10/10/2023",
      agence:"BNA",
      idClient:"2",
      Nom:"Client2",
      Prenom:"Client",
      RaisonSocial:"null",
      Engagements:"2",
      Impayés:"true",
      Provisions:"",
      Intérets:"rien",
      AutreFrais:"null",
      ActionRecouverements:"false"
    },
    {
      date:"10/01/2023",
      agence:"BNA",
      idClient:"3",
      Nom:"Client2",
      Prenom:"Client3",
      RaisonSocial:"null",
      Engagements:"1",
      Impayés:"true",
      Provisions:"",
      Intérets:"rien",
      AutreFrais:"null",
      ActionRecouverements:"false"
    },

  ]
}
