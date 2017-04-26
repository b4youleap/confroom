import { ConfroomPage } from './app.po';

describe('confroom App', () => {
  let page: ConfroomPage;

  beforeEach(() => {
    page = new ConfroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
