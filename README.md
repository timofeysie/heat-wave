# HEAT WAVE 🎮

<img src="super2.png" width="400" />

## Initial Ionic settings

When this project was first created with the PouchDB sample code, this is the result of running ```ionic info```:

```
Cordova CLI: 6.1.1
Gulp version:  CLI version 1.2.2
Gulp local:  
Ionic Framework Version: 3.1.1
Ionic CLI Version: 2.1.0
Ionic App Lib Version: 2.1.0-beta.1
ios-deploy version: Not installed
ios-sim version: Not installed
OS: Mac OS X Yosemite
Node Version: v4.4.3
Xcode version: Xcode 6.1.1 Build version 6A2008a 
```

This is before running:
```
npm uninstall -g ionic
npm install -g ionic@latest
```

After this, we got this warning:
```
m$ ionic info
ERR: Your Node.js version is v4.4.3. Please update to the latest Node 6 LTS version (or latest Node).
```

Easy to fix using the Node Version Manager:
```
QuinquenniumF:heat-wave tim$ nvm use 6
Now using node v6.9.2 (npm v3.10.9)
```

The updated info afterwards:
```
Ionic Framework Version: 3.1.1
Ionic CLI Version: 2.1.18
Ionic App Lib Version: 2.1.9
Ionic App Scripts Version: 1.3.6
ios-deploy version: Not installed
ios-sim version: Not installed
OS: OS X Yosemite
Node Version: v6.9.2
Xcode version: Xcode 6.1.1 Build version 6A2008a
```


The Ionic Super Starter is a batteries-included starter project for Ionic 2.x apps complete with pre-built pages, providers, , and best practices for Ionic development.

## Update to Ionic 3.X
Following the instructions on [this page](https://forum.ionicframework.com/t/guide-how-to-update-to-ionic-3-x/87516).

### Step 1: Update the package.json
First delete the node_modules directory. 
Then update the required dependencies:

"dependencies": {
  "@angular/common": "4.0.2",

### Step 2: Update the app.module.ts
Import the Angular BrowserModule in your app/app.module.ts file, and then add it to the imports in the same file:
Aldo import the HttpModule in your app/app.module.ts file 
and then add it to the imports in the same file:

### Step 3: Update to Ionic Native 3.0
In step 2 we updated @ionic-native/core and removed the old ionic-native dependency.
For each native plugin, there is now a new npm install command. For example, the Splash Screen can be installed with this command:

ionic plugin add cordova-plugin-splashscreen
npm install --save @ionic-native/splash-screen
Go to the [Ionicn framework docs](https://ionicframework.com/docs/native18) and run the install command for all the used native plugins.
Then import the plugins in the app.module.ts file
and then add it to the providers in the same file:
And that's it! If nothing went wrong you should now run now the latest Ionic 3.0 release. Run ionic serve to test it out.

### Step 4: Deal with the errors
After doing an ```ionic serve``` there are two errors:
```
Cannot find module "socius/lib/providers/wikidata"
Cannot find name 'Http'.
```

The external socius module need to be linked to a newly cloned project by hand.
See [the instructions here](https://github.com/timofeysie/socius) to set up this connection.

The http issue I'm not so sure about.
The directions in step 2 should have fixed that issue.

In the app.module.ts file, we have this issue:

```
@NgModule({
  declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })

```
The instructions called for putting the HttpModule in the imports, but the pre-existing Http declaration in the deps array is showing a red squiggly error in VSCode.

We did remove the ```import { Http } from '@angular/http'; ``` for the new import.
If that line is re-instated, then we get this error:
```
Runtime Error
Can't resolve all parameters for createTranslateLoader: (?).
```
As an experiment, get ridd of ```useFactory: (createTranslateLoader)``` then causes this error:
```
Can't resolve all parameters for Storage: (?).
```

There is an [open issue on their repo](https://github.com/driftyco/ionic-starter-super/issues/98).
*ng2-translate is Angular 2, ngx-translate is Angular 4+ and Ionic 3+
The name is changed to deal with version break and semver from 5.0.0 to 6.0.1
ng2-translate 5 will fail with npm complaints for the ionic upgrade
Ref: #95 and other items that are related to this.*

The last issue there recommends changing the helper function:
```
return new TranslateStaticLoader(http, './assets/i18n', '.json');
```
Instead of the static loader we should use this: TranslateHttpLoader

However, this causes a red squiggly with the mouseover:
```
[ts] Cannot find name 'TranslateHttpLoader'.
```

After a few changes, I amd getting that second storage error again.
Here is the full stack trace:
```
Runtime Error
Can't resolve all parameters for Storage: (?).
Stack
Error: Can't resolve all parameters for Storage: (?).
    at d (http://localhost:8100/build/polyfills.js:3:3991)
    at syntaxError (http://localhost:8100/build/main.js:100139:34)
    at CompileMetadataResolver._getDependenciesMetadata (http://localhost:8100/build/main.js:112989:35)
    at CompileMetadataResolver._getTypeMetadata (http://localhost:8100/build/main.js:112857:26)
    at CompileMetadataResolver._getInjectableMetadata (http://localhost:8100/build/main.js:112843:21)
    at CompileMetadataResolver.getProviderMetadata (http://localhost:8100/build/main.js:113132:40)
    at http://localhost:8100/build/main.js:113062:49
    at Array.forEach (native)
    at CompileMetadataResolver._getProvidersMetadata (http://localhost:8100/build/main.js:113023:19)
    at CompileMetadataResolver.getNgModuleMetadata (http://localhost:8100/build/main.js:112678:50)
    at JitCompiler._loadModules (http://localhost:8100/build/main.js:123770:64)
    at JitCompiler._compileModuleAndComponents (http://localhost:8100/build/main.js:123729:52)
    at JitCompiler.compileModuleAsync (http://localhost:8100/build/main.js:123691:21)
    at PlatformRef_._bootstrapModuleWithZone (http://localhost:8100/build/main.js:5064:25)
    at PlatformRef_.bootstrapModule (http://localhost:8100/build/main.js:5050:21)
Ionic Framework: 3.1.1
Ionic Native: 2.4.1
Ionic App Scripts: 1.3.6
Angular Core: 4.0.2
Angular Compiler CLI: 4.0.2
Node: 6.9.2
OS Platform: OS X Yosemite
Navigator Platform: MacIntel
User Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36
```




## Super Start Blurb
The goal of the Super Starter is to get you from zero to app store faster than before, with a set of opinions from the Ionic team around page layout, data/user management, and project structure.

The way to use this starter is to pick and choose the various page types you want use, and remove the ones you don't. If you want a blank slate, this starter isn't for you (use the `blank` type instead).

One of the big advances in Ionic 2 was moving from a rigid route-based navigation system to a flexible push/pop navigation system modeled off common native SDKs. We've embraced this pattern to provide a set of reusable pages that can be navigated to anywhere in the app. Take a look at the [Settings page](https://github.com/driftyco/ionic-starter-super/blob/master/src/pages/settings/settings.html#L38) for a cool example of a page navigating to itself to provide a different UI without duplicating code.

_Note: the Ionic Super Starter requires Ionic CLI 2.1.18 or greater._

## PouchDB & CryptoPouch

This project includes [PouchDB](https://pouchdb.com) and [CryptoPouch]().
After installing these and adding the test code for crypto-pouch usage, there was this error:
```
webpackMissingModule — index.js:12Error: Cannot find module "node-uuid"
```

Installing node-uuid solved the problem::
```
$ npm i node-uuid --save
```

The sample crypto-pouch usage can be found in the src/pages/tutorial/tutorial directory.
The basic usage is this:
```
import * as PouchDB from 'pouchdb';
import * as CryptoPouch from 'crypto-pouch';

export class TutorialPage {
  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService) {
    
    PouchDB.plugin(CryptoPouch);
    var db = new PouchDB('kittens');
    var password = "password";

    db.crypto(password);

    // db.crypto(password).then(function () {
    //   return db.put({_id: 'foo', bar: 'baz'});
    // }).then(function () {
    //     return db.get('foo');
    // }).then(function (doc) {
    //     console.log('decrypted', doc);
    //     return db.removeCrypto();
    // }).then(function () {
    //     return db.get('foo');
    // }).then(function (doc) {
    //     console.log('encrypted', doc);
    // })
```

This code will run, but just doing ```db.crypto(password)``` apparently will do nothing.
According to [this StackOverflow answer](http://stackoverflow.com/questions/35758553/how-to-encrypt-a-pouchdb-database),
This is needed:
```
db.crypto(password).then(function () {
   // <-- encryption set up
})
```


However, trying this, for example by uncommenting the above commented out code will cause this runtime error:
```
EXCEPTION: Error in ./MyApp class MyApp - inline template:16:2 caused by: undefined is not an object (evaluating 'db.crypto(password).then')
```

Not sure why the first ```db.crypto(password)``` will work but the ```db.crypto(password).then``` will not.


## Table of Contents

1. [Pages](#pages)
2. [i18n](#i18n) (adding languages)

## Pages

The Super Starter comes with a variety of ready-made pages. These pages help you assemble common building blocks for your app so you can focus on your unique features and branding.

The app loads with the `FirstRunPage` set to `TutorialPage` as the default. If the user has already gone through this page once, it will be skipped the next time they load the app.

If the tutorial is skipped but the user hasn't logged in yet, the Welcome page will be displayed which is a "splash" prompting the user to log in or create an account.

Once the user is authenticated, the app will load with the `MainPage` which is set to be the `TabsPage` as the default.

The entry and main pages can be configured easily by updating the corresponding variables in [src/pages/pages.ts](https://github.com/driftyco/ionic-starter-super/blob/master/src/pages/pages.ts).

Please read the [Pages](https://github.com/driftyco/ionic-starter-super/tree/master/src/pages) readme, and the readme for each page in the source for more documentation on each.

## Providers

The Super Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its `login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST` requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with [ng2-translate](https://github.com/ocombe/ng2-translate). This makes it easy to change the text used in the app by modifying only one file. 

By default, the only language strings provided are American English.

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory, following the pattern of LANGCODE.json where LANGCODE is the language/locale code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify `translate.use('en')` to use the LANGCODE from `src/assets/i18n/`