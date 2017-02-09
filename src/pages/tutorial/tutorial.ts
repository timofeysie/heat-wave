import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from 'ng2-translate/ng2-translate';

import * as PouchDB from 'pouchdb';
import * as CryptoPouch from 'crypto-pouch';



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

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService) {
    
    PouchDB.plugin(CryptoPouch);
    var db = new PouchDB('kittens');
    var password = "password";

    //db.crypto(password);

    db.crypto(password).then(function () {
      return db.put({_id: 'foo', bar: 'baz'});
    }).then(function () {
        return db.get('foo');
    }).then(function (doc) {
        console.log('decrypted', doc);
        return db.removeCrypto();
    }).then(function () {
        return db.get('foo');
    }).then(function (doc) {
        console.log('encrypted', doc);
    })

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
