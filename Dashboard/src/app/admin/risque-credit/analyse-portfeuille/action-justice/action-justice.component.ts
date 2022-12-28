import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-justice',
  templateUrl: './action-justice.component.html',
  styleUrls: ['./action-justice.component.css']
})
export class ActionJusticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Head:any=["Date","Agence","Id Client","Nom/Prenom/Raison social","Numero et Date_Affaire","Montant","ActionJustice " ]
  Data:any=[
    {
      date:"10/10/2021",
      agence:"BA",
      idClient:"1",
      Nom:"Client1",
      Prenom:"Client",
      RaisonSocial:"null",
      Numero:"1",
      Date_Affaire:"true",
      Montant:"",
      ActionJustice:"rien",
  
    },
    {
      date:"21/10/2022",
      agence:"BNA",
      idClient:"2",
      Nom:"Client2",
      Prenom:"Client",
      RaisonSocial:"null",
      Numero:"1",
      Date_Affaire:"true",
      Montant:"",
      ActionJustice:"rien",
  
    },
    {
      date:"10/10/2023",
      agence:"BNA",
      idClient:"2",
      Nom:"Client2",
      Prenom:"Client",
      RaisonSocial:"null",
      Numero:"1",
      Date_Affaire:"true",
      Montant:"",
      ActionJustice:"rien",
  
    },
    {
      date:"10/01/2023",
      agence:"BNA",
      idClient:"3",
      Nom:"Client2",
      Prenom:"Client3",
      RaisonSocial:"null",
      Numero:"1",
      Date_Affaire:"true",
      Montant:"",
      ActionJustice:"rien",
  
    },

  ]
}
