import { StorageSService } from './../storageService/storage-s.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditRisqueRapport } from 'app/Models/CreditRisqueRapport';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8085';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization':"Bearer "+ sessionStorage.getItem('accessstoken'),

   })
};

@Injectable({
  providedIn: 'root'
})
export class AnalysePortfeuilleServicesService {

  constructor(private http: HttpClient,private StorageSService:StorageSService ) { }
  public getPeriode (p:number):Observable<any>{
    return this.http.get<any>(baseUrl+`/allReportDate/${p}`);
  }

  getCreditParticulierParPeriode(p:any):Observable<CreditRisqueRapport> {
    
    return this.http.get<CreditRisqueRapport>(baseUrl+`/creditParticulier/${p}`);
  }
 
  public getCreditEntreParPeriode(p:any):Observable<CreditRisqueRapport>{
    return this.http.get<CreditRisqueRapport>(baseUrl+`/creditEntreprise/${p}` );
  }

 public  uploadReport(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
