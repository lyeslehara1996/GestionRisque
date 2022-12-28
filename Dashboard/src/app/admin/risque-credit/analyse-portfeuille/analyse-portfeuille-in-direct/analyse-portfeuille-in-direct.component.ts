import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-analyse-portfeuille-in-direct',
  templateUrl: './analyse-portfeuille-in-direct.component.html',
  styleUrls: ['./analyse-portfeuille-in-direct.component.css']
})
export class AnalysePortfeuilleInDirectComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }
  graphePortefeuilinDirect(){
    this.route.navigateByUrl("Admin/AnalysePortfeuille/GraphePortfeuilleindirect");
  }
}
