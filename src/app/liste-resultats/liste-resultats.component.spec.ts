import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResultatsComponent } from './liste-resultats.component';

describe('ListeResultatsComponent', () => {
  let component: ListeResultatsComponent;
  let fixture: ComponentFixture<ListeResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
