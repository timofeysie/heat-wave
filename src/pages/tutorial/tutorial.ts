import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { Wikidata } from 'socius/lib/providers/wikidata';

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
    translate: TranslateService,
    wikidata: Wikidata) {
    
      console.log('wiki',wikidata.getData('quadcopter'));
      
      translate.get(['TUTORIAL_SLIDE1_TITLE',
                   'TUTORIAL_SLIDE1_DESCRIPTION',
                   'TUTORIAL_SLIDE2_DESCRIPTION',
                   'TUTORIAL_SLIDE3_DESCRIPTION',
                   'TUTORIAL_SLIDE4_DESCRIPTION',
                   'TUTORIAL_SLIDE5_DESCRIPTION',
                   'TUTORIAL_SLIDE6_DESCRIPTION',
                   'TUTORIAL_SLIDE7_DESCRIPTION',
                   'TUTORIAL_SLIDE8_DESCRIPTION',
                   'TUTORIAL_SLIDE9_DESCRIPTION',
    ])
    .subscribe((values) => {
      this.slides = [
        {
          title: values.TUTORIAL_SLIDE1_TITLE,
          description: values.TUTORIAL_SLIDE1_DESCRIPTION,
          image: 'assets/img/exported/page-1.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE2_DESCRIPTION,
          image: 'assets/img/exported/page-2.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE3_DESCRIPTION,
          image: 'assets/img/exported/page-3.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE4_DESCRIPTION,
          image: 'assets/img/exported/page-4.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE5_DESCRIPTION,
          image: 'assets/img/exported/page-5.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE6_DESCRIPTION,
          image: 'assets/img/exported/page-6.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE7_DESCRIPTION,
          image: 'assets/img/exported/page-7.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE8_DESCRIPTION,
          image: 'assets/img/exported/page-8.png',
        },
        {
          title: null,
          description: values.TUTORIAL_SLIDE9_DESCRIPTION,
          image: 'assets/img/exported/page-9.png',
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
