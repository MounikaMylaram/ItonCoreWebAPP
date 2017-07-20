import { ItonPocSetUpWithCLIAndWebPackPage } from './app.po';

describe('iton-poc-set-up-with-cliand-web-pack App', () => {
  let page: ItonPocSetUpWithCLIAndWebPackPage;

  beforeEach(() => {
    page = new ItonPocSetUpWithCLIAndWebPackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
