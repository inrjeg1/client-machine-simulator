import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Machine} from './machine'
import {LogEntry} from '../content/logentry'
import {Activity} from '../content/activity'
import {ActivityResponse} from '../content/activityresponse'
import {Observable,of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MachineService {
 private restUrlMachine ='http://localhost:9000/machine';
  constructor(private httpClient:HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/** Log a Machine Service error message*/
private log(message: string) {
  console.log('Machine Service: ' + message);
}

  /** GET machines from the server */
getMachines (): Observable<Machine[]> {
  return this.httpClient.get<Machine[]>(this.restUrlMachine)
}

  /** Read machine logs by given machine name from the server */
  readMachineLogs (name:string): Observable<LogEntry[]> {
    const url = `${this.restUrlMachine}/${name}/readlog`
    return this.httpClient.get<LogEntry[]>(url)
  }

  /** Observe machine logs by given machine name from the server */
  observeMachineLogs (name:string): Observable<LogEntry[]> {
    const url = `${this.restUrlMachine}/${name}/observelog`
    return this.httpClient.get<LogEntry[]>(url)
  }

  /** POST: run activity */
  runExec (name:string,activity: Activity): Observable<Activity> {
    const url = `${this.restUrlMachine}/${name}/run`
    return this.httpClient.post<Activity>(url, activity, httpOptions).pipe(
      tap((activity: Activity) => this.log(`run Exec =${activity.exec}`)),
      catchError(this.handleError<Activity>('runExec'))
    );
  }

}
