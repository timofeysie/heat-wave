# HEAT WAVE 🎮

<img src="super2.png" width="400" />

The Ionic Super Starter is a batteries-included starter project for Ionic 2.x apps complete with pre-built pages, providers, , and best practices for Ionic development.

## Update to the latest super starter

Creating a new super starter project from scratch to replace the current project has a problem.
I started the dulpicate project in a different directory with the usual command:
```
ionic start heat-wave super
```

When running ```ionic serve```, there is only a blank starter UI and this console error:
```
:8100/css/style.css Failed to load resource: the server responded with a status of 404 (Not Found)
```

There is also a message in the terminal:
```
 Dependency warning - for the CLI to run correctly,      
 it is highly recommended to install/upgrade the following:     
 Please install your Cordova CLI to version  >=4.2.0 `npm install -g cordova`
```

Taking that advice.  Before the version info was: *Cordova CLI: 6.4.0*

After running `npm install -g cordova` the version is: *Cordova CLI: 7.0.1*

After this however, the build still will not create the style.css file.

The message regarding upgrading Cordova is still there in the terminal:
```
$ ionic info
******************************************************
 Dependency warning - for the CLI to run correctly,      
 it is highly recommended to install/upgrade the following:     
 Please install your Cordova CLI to version  >=4.2.0 `npm install -g cordova`
 Install ios-sim to deploy iOS applications.`npm install -g ios-sim` (may require sudo)
 Install ios-deploy to deploy iOS applications to devices.  `npm install -g ios-deploy` (may require sudo)
******************************************************
Your system information:
Cordova CLI:  You have been opted out of telemetry. To change this, run: cordova telemetry on.
7.0.1
Ionic CLI Version: 2.1.18
Ionic App Lib Version: 2.1.9
ios-deploy version: Not installed
ios-sim version: Not installed
OS: OS X Yosemite
Node Version: v6.9.2
Xcode version: Xcode 6.1.1 Build version 6A2008a
******************************************************
 Dependency warning - for the CLI to run correctly,      
 it is highly recommended to install/upgrade the following:     

 Please install your Cordova CLI to version  >=4.2.0 `npm install -g cordova`
```

Doing this takes almost a minute to complete:
```
$ cordova --version
? May Cordova anonymously report usage statistics to improve the tool over time? Yes
Thanks for opting into telemetry to help us improve cordova.
7.0.1
```

The [Ionic forum poast](https://forum.ionicframework.com/t/main-js-main-css-giving-404-not-found-error-randomly-rc0/65239/16) details a long list of people who have had similar problems going back for some time.

Since I have been able to run this project on various occasion, it seems like a tooling issue.

This project still has the issue detailed [in this closed issue](https://github.com/driftyco/ionic-starter-super/issues/98).
It is also [deailed here](https://github.com/ionic-team/ionic-starter-super/issues/102).

I will test this project on verious systems to see if it can run and under what tooling versions.

Trying to commit these changes resulted in the following 'conversation' with git:
```
$ git pull
Merge made by the 'recursive' strategy.
 package.json                   | 6 +++---
 src/app/app.module.ts          | 5 ++---
 src/pages/tutorial/tutorial.ts | 1 +
 3 files changed, 6 insertions(+), 6 deletions(-)
QuinquenniumF:heat-wave tim$ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)
nothing to commit, working directory clean
QuinquenniumF:heat-wave tim$ npm i
ionic-hello-world@ /Users/tim/angular/ionic/i2/heat-wave
├── UNMET PEER DEPENDENCY @angular/animations@4.0.2
├── UNMET PEER DEPENDENCY @angular/core@4.0.2
├── UNMET PEER DEPENDENCY @angular/http@4.0.2
└── @ionic/storage@2.0.0 

npm WARN @angular/platform-server@4.0.2 requires a peer of @angular/animations@4.0.2 but none was installed.
npm WARN ng2-translate@5.0.0 requires a peer of @angular/core@^2.0.0 but none was installed.
npm WARN ng2-translate@5.0.0 requires a peer of @angular/http@^2.0.0 but none was installed.
npm WARN @angular/core@2.0.2 requires a peer of zone.js@^0.6.21 but none was installed.
```

After this, the result of an ```ionic serve``` is a broken app and this error:
```
polyfills.js:3 Unhandled Promise rejection: Template parse errors:
Can't bind to 'options' since it isn't a known property of 'ion-slides'.
```

Removing the ```[options]="{pager: true}"``` from the tutorial.html page and the app runs.

The next step to an easy upgrade (ie: skipping manually applying all the commits since the project was created) is to try out a blank super-starter on another system to see if the tooling is the problem with this system in particular.


After this, the android platform was added, but the build failed.
We are still on the old cli:
```
Cordova CLI: 7.0.1 
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

The notes for the cli say:
*Please make sure latest Node 6 LTS and NPM 3+ are installed.*

```
$ npm --v
3.10.9
```

Running ```npm install -g ionic@latest``` (with sudo for this mac).

Then, try the build again:
```
 ionic cordova build android
? Looks like this is an Ionic Angular project, would you like to install @ionic/cli-plugin-ionic-angular and continue? Yes
> npm install --save-dev --save-exact @ionic/cli-plugin-ionic-angular@latest
```

Not sure what the cli-plugin-ionic-angular is.
Their GitHub says *This CLI project plugin provides Ionic Angular functionality to the CLI.*

What would happen if we said no to the question?
Then there was another one:
```
? The plugin @ionic/cli-plugin-cordova is not installed. Would you like to install it and continue? Yes
> npm install --save-dev --save-exact @ionic/cli-plugin-cordova@latest
✔ Running command - done!
```

After this, the build fails:
```
[06:09:23]  lint finished in 55.34 s 
✖ Running command - failed!
[ERROR] Cordova encountered an error.
        You may get more insight by running the Cordova command above directly.
[ERROR] An error occurred while running cordova build android (exit code 1):        
        ANDROID_HOME=/Users/tim/Library/Android/sdk
        JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home
        Error: spawn EACCES
```

After a few days coming back to this problem, the next time I ran ionic cordova build android, I was asked to update these:
```
@ionic/cli-plugin-cordova has an update available (1.4.1 => 1.6.2)
@ionic/cli-plugin-ionic-angular has an update available (1.3.2 => 1.4.1)
```

The result then of the build:
```
[02:30:40]  build dev finished in 47.02 s 
[WARN] Error occurred during command execution from a CLI plugin (@ionic/cli-plugin-cordova). Your plugins may be out of date.
TypeError: env.runcmd is not a function
QuinquenniumF:heat-wave tim$ [02:30:57]  tslint: src/pages/tutorial/tutorial.ts, line: 1 
            Unused import: 'Injector' 
       L1:  import { Component, Injector } from '@angular/core';
       L2:  import { MenuController, NavController } from 'ionic-angular';
[02:30:57]  tslint: src/app/app.module.ts, line: 1 
            Unused import: 'Injectable' 
       L1:  import { NgModule, ErrorHandler, Injectable } from '@angular/core';
       L2:  import { BrowserModule } from '@angular/platform-browser';
(node:41523) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: channel closed
```

The lint error is easy to fix.  Bear in mind this came with the Ionic super starter code out of the box.  Should we create a pull request for that?  It would most likely come from their base project, which is then used in the CLI build, so may not be an easy fix.

Next, I the cli plugin had not been updated just before, you might wonder how to update that manually.  But for now, a Google search for ```env.runcmd is not a function```.

The answer to [this SO question](https://stackoverflow.com/questions/45475362/during-building-ionic-app) states:

*This error message indicates that the Ionic CLI version is incompatible with other CLI plugins (see https://github.com/ionic-team/ionic/issues/12561). Please run the following commands in your project directory (where you package.json is):*
```
npm i -g ionic@latest
npm i --save-dev --save-exact ionic@latest
```
*This will install the latest Ionic CLI version (currently 3.7.0) globally and locally. After that the error should no longer occur.*

Despite updating the last time working on this app a few weeks ago when we had ```Ionic CLI Version: 2.1.18``` as noted above, the new version is ```CLI 3.9```.
Things change quickly in this front-end world!

So the answer when doing ```ionic --info`` to this question was yes:
```? The Ionic CLI can automatically check for CLI updates in the background. Would you like to enable this? Yes```

So, without doing the second command up there, re-run the build and that error is gone.
But there is still one last error:
```
✖ Running command - failed!
[ERROR] An error occurred while running cordova build android (exit code 1):     
        ANDROID_HOME=/Users/tim/Library/Android/sdk
        JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk/Contents/Home
        Error: spawn EACCES
```

The old EACCES error!  So tried one answer from [this SO question](https://stackoverflow.com/questions/38767126/getting-error-spawn-eacces-while-ionic-build-android-in-ubuntu-14-04):
```
sudo chmod -R 777 /Users/tim/Library/Android/sdk
```

Then, running the build again:
```
$ ionic cordova build android
[WARN] Detected @ionic/cli-plugin-cordova in your package.json.
       As of CLI 3.8, it is no longer needed. You can uninstall it:
       npm uninstall --save-dev --save-exact @ionic/cli-plugin-cordova
[WARN] Detected @ionic/cli-plugin-ionic-angular in your package.json.
       As of CLI 3.8, it is no longer needed. You can uninstall it:    
       npm uninstall --save-dev --save-exact @ionic/cli-plugin-ionic-angular
```
Wait, these were the plugins that the CLI has been bugging us to update with each command for the past few months.  Maybe they got some feedback to just inline all that functionality?

Anyhow, after that chmod, still same error.  

Looking at [a Ionic Forum answer]():
*I don't think it has anything to do with sudo - that command is simply missing the execute permission*
```
chmod +x hooks/after_prepare/010_add_platform_class.js
```

But this is for Ionic v1...

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