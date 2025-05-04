import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExerciseComponent } from './info-exercise.component';

describe('InfoExerciseComponent', () => {
  let component: InfoExerciseComponent;
  let fixture: ComponentFixture<InfoExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
