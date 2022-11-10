import { Component, OnInit } from '@angular/core';
import { ActionDeRecouvermentComponent } from '../action-de-recouverment/action-de-recouverment.component';
import { AnalysePortfeuilleDirectComponent } from '../analyse-portfeuille-direct/analyse-portfeuille-direct.component';
import { AnalysePortfeuilleInDirectComponent } from '../analyse-portfeuille-in-direct/analyse-portfeuille-in-direct.component';
import { CreationDouteuseComponent } from '../creation-douteuse/creation-douteuse.component';
import { DurationComponent } from '../durations/duration.component';

@Component({
  selector: 'app-analyse-portfeuille-content',
  templateUrl: './analyse-portfeuille-content.component.html',
  styleUrls: ['./analyse-portfeuille-content.component.css']
})
export class AnalysePortfeuilleContentComponent implements OnInit {

  protected menuItems = [
    {
      menuItem: 'Portfeuille direct',
      path: 'Portfeuilledirect',
      Component:  AnalysePortfeuilleDirectComponent
    },
    {
      menuItem: 'Portfeuille indirect',
      path: 'AnalysePortfeuilleInDirect',
      component:AnalysePortfeuilleInDirectComponent
    },
    {
      menuItem: 'Duration',
      path: 'Duration',
      component:DurationComponent
    },
    {
      menuItem: 'Creation Duteuse',
      path: 'CreationDuteuse',
      component:CreationDouteuseComponent
    },
    {
      menuItem: 'Action De Recouverment',
      path: 'ActionDeRecouverment',
      component:ActionDeRecouvermentComponent
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
