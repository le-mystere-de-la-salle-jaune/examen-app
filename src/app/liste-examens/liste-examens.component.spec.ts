import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExamensComponent } from './liste-examens.component';

describe('ListeExamensComponent', () => {
  let component: ListeExamensComponent;
  let fixture: ComponentFixture<ListeExamensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeExamensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
