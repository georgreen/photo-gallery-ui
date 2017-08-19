import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFashionComponent } from './app-fashion.component';

describe('AppFashionComponent', () => {
  let component: AppFashionComponent;
  let fixture: ComponentFixture<AppFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
