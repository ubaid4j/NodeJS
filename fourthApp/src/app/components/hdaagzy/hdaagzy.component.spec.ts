import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdaagzyComponent } from './hdaagzy.component';

describe('HdaagzyComponent', () => {
  let component: HdaagzyComponent;
  let fixture: ComponentFixture<HdaagzyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdaagzyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdaagzyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
