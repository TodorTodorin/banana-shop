import { BananaShopPage } from './app.po';

describe('banana-shop App', function() {
  let page: BananaShopPage;

  beforeEach(() => {
    page = new BananaShopPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('banana-shop works!');
  });
});
