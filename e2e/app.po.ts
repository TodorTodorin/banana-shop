export class BananaShopPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('banana-shop-app h1')).getText();
  }
}
