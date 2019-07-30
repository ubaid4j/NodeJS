import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahaagComponent } from './shahaag.component';

describe('ShahaagComponent', () => {
  let component: ShahaagComponent;
  let fixture: ComponentFixture<ShahaagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShahaagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahaagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
