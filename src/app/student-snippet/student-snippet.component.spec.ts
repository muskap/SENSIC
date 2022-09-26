import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSnippetComponent } from './student-snippet.component';

describe('StudentSnippetComponent', () => {
  let component: StudentSnippetComponent;
  let fixture: ComponentFixture<StudentSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
