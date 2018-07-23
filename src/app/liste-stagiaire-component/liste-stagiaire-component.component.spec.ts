import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStagiaireComponentComponent } from './liste-stagiaire-component.component';

describe('ListeStagiaireComponentComponent', () => {
  let component: ListeStagiaireComponentComponent;
  let fixture: ComponentFixture<ListeStagiaireComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStagiaireComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStagiaireComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
