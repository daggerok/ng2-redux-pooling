import { Ng4reduxPage } from './app.po';

describe('ng4redux App', () => {
  let page: Ng4reduxPage;

  beforeEach(() => {
    page = new Ng4reduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
