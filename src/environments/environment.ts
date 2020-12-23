// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    apiUrl: 'https://localhost:5003/api/', //server
    siteKey: '6LcWjL8UAAAAAHV5mX0Iyxoy9OtKD8puYu7ty8xG', //DEVs
    oAuth2Settings: {
    clientId: 'wfclient',
    clientSecret: '2d3fdc4bd6fd434a9c4e32f6dad9c1ca',
    accessTokenUri: 'https://localhost:5001/connect/token', //idp
    authorizationUri: 'https://localhost:5001/connect/authorize',
    redirectUri: 'https://localhost:4200/signin-oidc',
    scope: 'profile webformsapi'
  },
  version: "0.0"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
