import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndDeleteComponent } from './edit-and-delete.component';

describe('EditAndDeleteComponent', () => {
  let component: EditAndDeleteComponent;
  let fixture: ComponentFixture<EditAndDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAndDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAndDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
