import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbaidrehmanComponent } from './ubaidrehman.component';

describe('UbaidrehmanComponent', () => {
  let component: UbaidrehmanComponent;
  let fixture: ComponentFixture<UbaidrehmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbaidrehmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbaidrehmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
