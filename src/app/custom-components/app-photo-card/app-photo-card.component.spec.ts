import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhotoCardComponent } from './app-photo-card.component';

describe('AppPhotoCardComponent', () => {
  let component: AppPhotoCardComponent;
  let fixture: ComponentFixture<AppPhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPhotoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
