import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnhac07Component } from './mnhac07.component';

describe('Mnhac07Component', () => {
  let component: Mnhac07Component;
  let fixture: ComponentFixture<Mnhac07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mnhac07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mnhac07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
