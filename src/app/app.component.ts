import { Component } from '@angular/core';

import { Site } from './site';

const SITES: Site[] = [
  { title: 'Ynet', url: 'www.ynet.co.il' },
  { title: 'Google', url: 'www.google.com' },
  { title: 'Gmail', url: 'www.gmail.com' },
  { title: '888', url: 'www.888.com' },
  { title: 'CNN', url: 'www.cnn.com' }
];

@Component({
    moduleId: module.id,
    selector: 'as-main-app',
    templateUrl: 'app.html'
})
export class AppComponent {
    sites = SITES;
}
