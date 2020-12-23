import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, from } from 'rxjs';

declare var require: any;
const ClientOAuth2 = require('client-oauth2');

@Injectable({
  providedIn: 'root'
})

export class OauthConnectService {
  private apiAuth = new ClientOAuth2(environment.oAuth2Settings);

  constructor() { }

  getToken(): Observable<any> {
    return from(this.apiAuth.credentials.getToken());
  }
}
