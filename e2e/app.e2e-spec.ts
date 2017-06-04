import { YmasPage } from './app.po';

describe('ymas App', () => {
  let page: YmasPage;

  beforeEach(() => {
    page = new YmasPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
