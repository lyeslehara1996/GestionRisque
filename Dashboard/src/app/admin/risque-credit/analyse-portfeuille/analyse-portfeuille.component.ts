import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analyse-portfeuille',
  templateUrl: './analyse-portfeuille.component.html',
  styleUrls: ['./analyse-portfeuille.component.css']
})
export class AnalysePortfeuilleComponent implements OnInit {
  protected menuItems = [
    
    {
      menuItem: 'Portfeuille direct',
      path: 'Portfeuilledirect',
    },
    {
      menuItem: 'Portfeuille indirect',
      path: 'AnalysePortfeuilleInDirect',
    },
    {
      menuItem: 'Duration',
      path: 'Duration',
    },
    {
      menuItem: 'Creance Duteuse',
      path: 'CreanceDuteuse',
    },
    {
      menuItem: 'Action De Recouverments',
      path: 'ActionDeRecouverment',
    },
    {
      menuItem: 'Action De Justice  ',
      path: 'ActionDeJustices',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
