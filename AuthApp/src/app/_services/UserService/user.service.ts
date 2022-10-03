import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_API='http://localhost:8085/';

   requestHeader =new HttpHeaders(
    {"No-Auth":"true"}
   );
 
  constructor(private httpClient: HttpClient) { }


  // public Login(){
  //   return this.httpClient.post(this.PATH_API +"/Auth/signin",Data,{headers:this.requestHeader})
  // }
}
