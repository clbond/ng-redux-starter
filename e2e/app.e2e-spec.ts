import { NgReduxStarterPage } from './app.po';

describe('ng-redux-starter App', function() {
  let page: NgReduxStarterPage;

  beforeEach(() => {
    page = new NgReduxStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
