// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB2WEJLczYGEriwybIfq6U6rSAN6kz0CDE",
    authDomain: "myapp-c86a0.firebaseapp.com",
    databaseURL: "https://myapp-c86a0.firebaseio.com",
    projectId: "myapp-c86a0",
    storageBucket: "myapp-c86a0.appspot.com",
    messagingSenderId: "959021190797"
  }
};
