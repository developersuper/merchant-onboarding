import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OauthConnectService } from '../authentication';

@Injectable()
export class OAuthGuard implements CanActivate {

  constructor(private oauthConnectService: OauthConnectService, private router: Router) { }

  canActivate() {
    return new Promise<boolean>((resolve, reject) => {
      if (sessionStorage.getItem('token') !== null) {
        // Token refresh. 
        if (new Date(sessionStorage.getItem('tokenExpiry') || '') <= new Date()) {
          this.oauthConnectService.getToken().subscribe(o => {
            sessionStorage.setItem('token', o['accessToken']);
            sessionStorage.setItem('tokenExpiry', o['expires']);
            if (o) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        } else {
          resolve(true);
        }
      } else {
        // when there's no token
        this.oauthConnectService.getToken().subscribe(o => {
          console.log(o);
          sessionStorage.setItem('token', o['accessToken']);
          sessionStorage.setItem('tokenExpiry', o['expires']);
          if (o) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  }
}
