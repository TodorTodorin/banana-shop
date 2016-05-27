import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BananaShopAppComponent } from '../app/banana-shop.component';

beforeEachProviders(() => [BananaShopAppComponent]);

describe('App: BananaShop', () => {
  it('should create the app',
      inject([BananaShopAppComponent], (app: BananaShopAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'banana-shop works!\'',
      inject([BananaShopAppComponent], (app: BananaShopAppComponent) => {
    expect(app.title).toEqual('banana-shop works!');
  }));
});
