import { Itec3010wk4Page } from './app.po';

describe('itec3010wk4 App', () => {
  let page: Itec3010wk4Page;

  beforeEach(() => {
    page = new Itec3010wk4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
