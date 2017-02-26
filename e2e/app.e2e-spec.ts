import { Angular2TrainingPage } from './app.po';

describe('angular2-training App', function() {
  let page: Angular2TrainingPage;

  beforeEach(() => {
    page = new Angular2TrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
