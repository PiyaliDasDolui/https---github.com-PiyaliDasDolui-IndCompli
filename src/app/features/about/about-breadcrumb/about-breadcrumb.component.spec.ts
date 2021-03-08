import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBreadcrumbComponent } from './about-breadcrumb.component';

describe('AboutBreadcrumbComponent', () => {
  let component: AboutBreadcrumbComponent;
  let fixture: ComponentFixture<AboutBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
