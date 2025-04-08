import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRutineComponent } from './edit-rutine.component';

describe('EditRutineComponent', () => {
  let component: EditRutineComponent;
  let fixture: ComponentFixture<EditRutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRutineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
