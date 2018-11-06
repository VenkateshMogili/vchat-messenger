// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBLT0GLlPpyJwc1TOQTt0md59Q1efOaYWM',
    authDomain: 'vchat-messenger.firebaseapp.com',
    databaseURL: 'https://vchat-messenger.firebaseio.com',
    projectId: 'vchat-messenger',
    storageBucket: 'vchat-messenger.appspot.com',
    messagingSenderId: '546055890734'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
