import { TestAngularPage } from './app.po';

describe('test-angular App', () => {
  let page: TestAngularPage;

  beforeEach(() => {
    page = new TestAngularPage();
  });

  it('should display message saying app works', () => {
    //test2
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
