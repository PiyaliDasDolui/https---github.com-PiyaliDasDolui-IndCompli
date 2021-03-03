import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsChildComponent } from './firts-child.component';

describe('FirtsChildComponent', () => {
  let component: FirtsChildComponent;
  let fixture: ComponentFixture<FirtsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirtsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
