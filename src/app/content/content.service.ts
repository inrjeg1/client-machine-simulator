import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {SystemCode} from './systemcode'
import {Activity} from './activity'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private restUrl ="http://localhost:9000/content";
  constructor(private httpClient:HttpClient) { }

    /** Gets the system codes from the server*/
    getSystemCodes():Observable<SystemCode[]>{
      const url = `${this.restUrl}/systemcodes`
      return this.httpClient.get<SystemCode[]>(url);
    }

    /** Gets the known activities for a system code from the server*/
    getKnonwnActivities(systemcode:string):Observable<Activity[]>{
      const url = `${this.restUrl}/systemcodes/${systemcode}`
      return this.httpClient.get<Activity[]>(url);
    }

}
