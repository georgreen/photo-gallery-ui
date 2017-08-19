import { PhotoGalleryUiPage } from './app.po';

describe('photo-gallery-ui App', () => {
  let page: PhotoGalleryUiPage;

  beforeEach(() => {
    page = new PhotoGalleryUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
