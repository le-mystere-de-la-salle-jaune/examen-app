import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserExamenComponent } from './passer-examen.component';

describe('PasserExamenComponent', () => {
  let component: PasserExamenComponent;
  let fixture: ComponentFixture<PasserExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasserExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
