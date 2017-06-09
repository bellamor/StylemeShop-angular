import { StylemeShopPage } from './app.po';

describe('styleme-shop App', () => {
  let page: StylemeShopPage;

  beforeEach(() => {
    page = new StylemeShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
