import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { BananaShopAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(BananaShopAppComponent,[
  FIREBASE_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS ,
  defaultFirebase('https://myretardedfriends.firebaseio.com/')
]);
