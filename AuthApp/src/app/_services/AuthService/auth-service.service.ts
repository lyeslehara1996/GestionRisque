import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable, of } from 'rxjs';
import { AuthM } from 'src/app/Models/auth-m';
import { StorageSService } from '../storageService/storage-s.service';
import { UserService } from '../UserService/user.service';


  
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization':"Bearer "+ sessionStorage.getItem('accessstoken'),

   })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  private AUTH_API = 'http://localhost:8085/Auth/signin';

  private Refresh_Auth ='http://localhost:8085/Auth/RefreshToken';


  constructor(private router:Router, private storageservice:StorageSService  , private http: HttpClient,private userservice:UserService) {  }

 
  public Login(Data:any) {
    return this.http.post(this.AUTH_API,Data);
  }
  
  public GetRefresh(){
    debugger;
    let ajax = new XMLHttpRequest;
    let newAccessToken = {
      jwtAccessTocken: ""
    };
    
    ajax.open('GET', this.Refresh_Auth);

      ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && ajax.status === 200) {
        newAccessToken = JSON.parse(ajax.responseText)
        this.storageservice.saveToken(newAccessToken.jwtAccessTocken)
        
      }

      if (ajax.status === 401) {
        this.storageservice.signOut();
        this.router.navigateByUrl('/Signin');
      }
    }

    ajax.setRequestHeader('Accept', 'application/json');
    ajax.setRequestHeader("Authorization", "Bearer " + this.storageservice.getRefreshToken() + '')
    ajax.send()
    // return newAccessToken;
    // return this.http.get<any>(this.Refresh_Auth,this.httpOptionsRefresh);
    debugger;
}





}


