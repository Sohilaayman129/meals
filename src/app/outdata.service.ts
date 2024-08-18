import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn:'root'
} )


export class OutdataService {
//API LOGIC
  constructor(private _HttpClient:HttpClient ) { }

getdata():Observable<any>
{
return this._HttpClient.get('https://forkify-api.herokuapp.com/api/search?q=pasta')
}  

}
