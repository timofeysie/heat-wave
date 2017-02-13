import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from 'ng2-translate/ng2-translate';

import * as PouchDB from 'pouchdb';
import * as CryptoPouch from 'crypto-pouch';
import * as PBKDF2 from 'crypto-js/pbkdf2';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController, 
    translate: TranslateService) {
    
    PouchDB.plugin(CryptoPouch);
    var db = new PouchDB('kittens');
    var password = "password";

    db.crypto(password);
    // all done, docs should be transparently encrypted/decrypted

    // [ts] Property 'pbkdf2' does not exist on type 'Crypto'.
    // db.get('_local/crypto').then(function (doc) {
    //   return new Promise(function (resolve, reject) {
    //     crypto.pbkdf2(password, doc.salt, doc.iterations, 256/8, doc.digest, function (err, key) {
    //       if (err) {
    //         return reject(err);
    //       }
    //       resolve(key);
    //     });
    //   });
    // }).then(function (key) {
    //   console.log('you have the key',key);
    // });



    translate.get(["TUTORIAL_SLIDE1_TITLE",
                   "TUTORIAL_SLIDE1_DESCRIPTION",
                   "TUTORIAL_SLIDE2_TITLE",
                   "TUTORIAL_SLIDE2_DESCRIPTION",
                   "TUTORIAL_SLIDE3_TITLE",
                   "TUTORIAL_SLIDE3_DESCRIPTION",
    ])
    .subscribe((values) => {
      console.log('Loaded values', values);
      this.slides = [
        {
          title: values.TUTORIAL_SLIDE1_TITLE,
          description: values.TUTORIAL_SLIDE1_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-1.png',
        },
        {
          title: values.TUTORIAL_SLIDE2_TITLE,
          description: values.TUTORIAL_SLIDE2_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-2.png',
        },
        {
          title: values.TUTORIAL_SLIDE3_TITLE,
          description: values.TUTORIAL_SLIDE3_DESCRIPTION,
          image: 'assets/img/ica-slidebox-img-3.png',
        }
      ];
    });

  }

  startApp() {
    this.navCtrl.setRoot(WelcomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
