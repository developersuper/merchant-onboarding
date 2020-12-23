import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
// import { ConsumerFeeRequest, PaymentRequest } from '../models/models';
import { ICredentials, IMerchant } from '../../shared/interfaces';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private url = environment.apiUrl;
  token: any = '';
  headerDict: any = {};
  requestOptions: any = {};

  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem('token');
    console.log(this.token);
    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'text',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'Bearer ' + this.token
    };
    this.requestOptions = {
      headers: new HttpHeaders(this.headerDict),
      responseType: 'text' as 'json'
    };
  }

  getMerchants(): Observable<any> {
    return this.http.get<any>(this.url + 'merchants', this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  postMerchant(merchant:IMerchant): Observable<any> {
    return this.http.post<any>(this.url + 'merchants', merchant, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  postCredentials(id:string, credentials: ICredentials): Observable<any> {
    console.log("before http", id, credentials);
    return this.http.post<any>(this.url + 'merchants/' + id + '/credentials', credentials, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: any;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      if (!environment.production) {
        console.log(err);
      }
      errorMessage = {
        message: `Server returned code: ${err.status}, error message is: ${err.message}`,
        status: err.status,
        error: err.error ? err.error : null
      };
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private handleSearchError(err: HttpErrorResponse) {
    let errorMessage: any;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      if (!environment.production) {
        console.log(err);
      }
      errorMessage = {
        message: `Server returned code: ${err.status}, error message is: ${err.message}`,
        status: err.status,
        error: err.error ? err.error : null
      };
    }
    console.error(errorMessage);
    return [];
  }
}
