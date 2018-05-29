import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable,of } from 'rxjs';
import {Delay} from '../driver/delay'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  private restUrl ="http://localhost:9000/drivers";
  constructor(private httpClient:HttpClient) { }

    /** reset all*/
    resetAll():Observable<{}>{
      const url = `${this.restUrl}/all/reset`
      return this.httpClient.delete(url);
    }

  /** POST: set delay */
  setDelay (delay:Delay): Observable<{}> {
    const url = `${this.restUrl}/delay`
    return this.httpClient.post<{}>(url, delay, httpOptions);
  }

  
}
