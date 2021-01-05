import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { ConsumerFeeRequest, PaymentRequest } from '../models/models';
import { ICredentials, IMerchant, IStylesheet } from '../../shared/interfaces';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private merchants = new BehaviorSubject([]);
  private editingMerchant = new BehaviorSubject(null);
  currentMerchants = this.merchants.asObservable();
  currentEditingMerchant = this.editingMerchant.asObservable();
  private url = environment.apiUrl;
  token: any = '';
  headerDict: any = {};
  requestOptions: any = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
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
  
  updateMerchants(newMerchants: any) {
    if(newMerchants === 'refresh'){
      this.http.get(`${this.url}merchants`, this.requestOptions).subscribe((data: any) => {
        const newMerchants = JSON.parse(data).map((merchant: any) => {
          return {
            id: merchant.id,
            title: merchant.title,
            subtitle: merchant.subtitle,
            contactEmail: merchant.contactEmail,
            contactPhone: merchant.contactPhone,
            contactAddressLine1: merchant.contactAddressLine1,
            contactAddressLine2: merchant.contactAddressLine2,
            contactCity: merchant.contactCity,
            contactState: merchant.contactState,
            contactCountry: merchant.contactCountry,
            contactPostalCode: merchant.contactPostalCode,
            shortName: merchant.shortName,
            allowedPaymentTypes: merchant.allowedPaymentTypes,
            termsAndConditions: merchant.termsAndConditions
          };
        });
        this.merchants.next(newMerchants);
      },
      error => console.log(error)
      );
    }
    this.merchants.next(newMerchants);
  }

  updateEditingMerchant(newMerchant: any) {
    this.editingMerchant.next(newMerchant);
  }

  getMerchants(): Observable<any> {
    console.log('get merchants called...');
    return this.http.get<any>(`${this.url}merchants`, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  postMerchant(merchant:IMerchant): Observable<any> {
    return this.http.post<any>(this.url + 'merchants', merchant, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  patchMerchant(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.url}merchants/${id}`, data, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  postCredentials(id: string, credentials: ICredentials): Observable<any> {
    return this.http.post<any>(`${this.url}merchants/${id}/credentials`, credentials, this.requestOptions).pipe(
      catchError(this.handleError)
    );
  }

  postStylesheet(id: string, stylesheet: IStylesheet): Observable<any> {
    return this.http.post<any>(`${this.url}merchants/${id}/stylesheet`, stylesheet, this.requestOptions).pipe(
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
