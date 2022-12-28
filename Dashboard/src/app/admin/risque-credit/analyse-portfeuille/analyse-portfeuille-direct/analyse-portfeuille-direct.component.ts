import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllSelected } from 'app/Models/AllSelected';
import { CreditRisqueRapport } from 'app/Models/CreditRisqueRapport';
import { AnalysePortfeuilleServicesService } from 'app/_services/analysePrtfeuille/analyse-portfeuille-services.service';

@Component({
  selector: 'app-analyse-portfeuille-direct',
  templateUrl: './analyse-portfeuille-direct.component.html',
  styleUrls: ['./analyse-portfeuille-direct.component.css']
})
export class AnalysePortfeuilleDirectComponent implements OnInit {
  lastYear: number = new Date().getFullYear() - 1;
  errormessage!: string;
  visible: boolean = false;
  checked: Boolean = false
  slectedPeriods: AllSelected[] = [];
  availablePeriods: AllSelected[] = [];
  dateTransforme!:any;
  creditReportFix : any ={};
  creditReportTotal : any[]= [];
  creditReportAnalysePortfeuille:any={ };
  CreditRisqueRapportTotal !: CreditRisqueRapport;
  dateChecked:any[]=[];
  constructor(private route:Router, private servicesRepo: AnalysePortfeuilleServicesService) { }

  ngOnInit(): void {
    this.handelGetAllReportDate();
    this.creditReportFix.creditParticulier = {};
    this.creditReportFix.creditEntreprise = {};

    this.creditReportFix.totalFix={};
    this.handelGetCreditPeriodFixe();
  
  }
  handelGetAllReportDate() {
    var datePipe = new DatePipe('en-US');
    this.servicesRepo.getPeriode(2019+ 1).subscribe({
      next: (dataPeriods) => {
     console.log("dats " ,dataPeriods);
        for (let i = 0; i <dataPeriods.length; i++) {
          const a1 = {} as AllSelected;
          a1.datereporte = dataPeriods[i];
          a1.checked = false;
          a1.id=i;
          console.log("date  ",a1.datereporte);
          this.dateTransforme = datePipe.transform(a1.datereporte , 'yyyy-MM-dd');
          console.log("date  ",this.dateTransforme);
          this.servicesRepo.getCreditParticulierParPeriode( this.dateTransforme ).subscribe({
            next: ( data)  => {
              a1.creditParticulier = data;
              console.log("pattic ", a1.creditParticulier );
            },
            error: (err) => {
              this.errormessage = err.error.message;
            }
            
          });
          this.servicesRepo.getCreditEntreParPeriode( this.dateTransforme ).subscribe({
            next: ( data)  => {
              a1.creditEntreprise = data
            }, 
            error: (err) => {
              this.errormessage = err.error.message;
            }
           });
          this.availablePeriods.push(a1);
       
        }
       
      },
      error: (err) => {
        this.errormessage = err;
      }
    })
   

  }

 showCheckboxes() {
   this.visible = !this.visible
  }

 stateChanged(event: any, selctPeriodElt: AllSelected)  {

   selctPeriodElt.checked= event.target.checked;
    if(event.target.checked){
      console.log("sekected periode ",selctPeriodElt);
        this.slectedPeriods.push(selctPeriodElt);
    
        var resultTotal = this.getTotalForPeriod(selctPeriodElt.creditParticulier,selctPeriodElt.creditEntreprise, {}, this.getSomme);
       
        this.slectedPeriods.sort((a,b)=>a.id-b.id); 

        resultTotal.index = this.slectedPeriods.indexOf(selctPeriodElt);
        this.creditReportTotal.push(resultTotal);
        
        this.creditReportTotal.sort((a,b)=>a.index-b.index);
        var lastElement =this.creditReportTotal[this.creditReportTotal.length-1];
    
 
       var resultVariation=  this.getTotalForPeriod(lastElement, this.creditReportFix.totalFix, {},this.getvariationmontant);
       console.log("result " ,resultVariation );
        this.creditReportAnalysePortfeuille.variationMontant=resultVariation;
        var resultPourcentage = this.getTotalForPeriod(resultVariation,this.creditReportFix.totalFix,{},this.getPourcentage)
        this.creditReportAnalysePortfeuille.resultPourcentage=resultPourcentage;
      }else{
        var index=this.slectedPeriods.indexOf(selctPeriodElt);
        this.slectedPeriods.splice(index,1);
        this.creditReportTotal.splice(index,1);

    }
 
    this.creditReportAnalysePortfeuille.creditReportTotal={};
    this.creditReportAnalysePortfeuille.creditReportTotal= this.creditReportTotal;
    this.creditReportAnalysePortfeuille.slectedPeriods=this.slectedPeriods;

 
    if(this.creditReportAnalysePortfeuille.creditReportTotal.length ===0){
      this.creditReportAnalysePortfeuille.creditPourcentage =[];
      this.creditReportAnalysePortfeuille.creditVariation=[];
    }

  }

 handelGetCreditPeriodFixe(){
  this.servicesRepo.getCreditParticulierParPeriode(this.lastYear+"-12-31")
    .subscribe((response)=>{
         this.creditReportFix.creditParticulier  = response;
        this.servicesRepo.getCreditEntreParPeriode(this.lastYear+"-12-31")
            .subscribe((response)=>{
              this.creditReportFix.creditEntreprise  = response;
              this.creditReportFix.totalFix={};
              this.getTotalForPeriod(this.creditReportFix.creditParticulier,this.creditReportFix.creditEntreprise, this.creditReportFix.totalFix, this.getSomme);
              this.creditReportAnalysePortfeuille.creditReportFix =this.creditReportFix;

         
         })
           
    })

  }
  getTotalForPeriod(arg1 : any, arg2 : any, result : any, operation:any ) {
    
  
    result.creditTotaldirect = operation(arg1.creditTotaldirect , arg2.creditTotaldirect);
    result.creanceDouteuse =  operation(arg1.creanceDouteuse , arg2.creanceDouteuse);
    result.creanceCourant = operation(arg1.creanceCourant , arg2.creanceCourant);
    result.interetReserve =  operation(arg1.interetReserve ,  arg2.interetReserve); 
	  result.provisions	= operation(arg1.provisions	, arg2.provisions);
    result.tauxCreanceDouteuse = operation(arg1.tauxCreanceDouteuse , arg2.tauxCreanceDouteuse);
    result.tauxOuverture = operation(arg1.tauxOuverture , arg2.tauxOuverture);
    result.interetreservesCreancesDouteuse = operation(arg1.interetreservesCreancesDouteuse  , arg2.interetreservesCreancesDouteuse);
	  result.creanceDouteuseNets = operation(arg1.creanceDouteuseNets , arg2.creanceDouteuseNets); 
    result.creditDirectNetInteretReserve = operation(arg1.creditDirectNetInteretReserve , arg2.creditDirectNetInteretReserve);
    return result

  } 


  

  genrerRapportAnalysePortefeuilleDirect()
  {
    this.servicesRepo.uploadReport(this.creditReportAnalysePortfeuille)
    .subscribe({
      next: (res) => {
        console.log(res);
       
      }
    });
console.log("this.creditReportAnalysePortfeuille",this.creditReportAnalysePortfeuille);
  }


getSomme (params:any, arg:any) {
    var reslt = params+arg
    return reslt;
  }
  getvariationmontant(params:any, arg:any){
    var reslt = params-arg;
    return reslt;
  }
  getPourcentage(args1: any, args2:any){
    var reslt= 100*args1/args2
    return reslt
  }



  graphePortefeuilDirect(){

    this.route.navigateByUrl("Admin/AnalysePortfeuille/GraphePortfeuilledirect");

  }
}
