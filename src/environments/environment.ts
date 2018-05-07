// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDeocWi7eN1vFCnCVKTVy-fU6Xj9vYb_4o',
    authDomain: 'angular-gallery.firebaseapp.com',
    databaseURL: 'https://angular-gallery.firebaseio.com',
    projectId: 'angular-gallery',
    storageBucket: 'angular-gallery.appspot.com',
    messagingSenderId: '7508517833'
  }
};
