import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchUserNotesComponent } from './fetch-user-notes.component';

describe('FetchUserNotesComponent', () => {
  let component: FetchUserNotesComponent;
  let fixture: ComponentFixture<FetchUserNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchUserNotesComponent]
    });
    fixture = TestBed.createComponent(FetchUserNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
