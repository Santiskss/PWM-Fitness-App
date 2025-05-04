import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndTextComponent } from './image-and-text.component';

describe('ImageAndTextComponent', () => {
  let component: ImageAndTextComponent;
  let fixture: ComponentFixture<ImageAndTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAndTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAndTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
