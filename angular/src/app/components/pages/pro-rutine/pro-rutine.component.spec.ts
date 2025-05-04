import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProRutineComponent } from './pro-rutine.component';

describe('ProRutineComponent', () => {
  let component: ProRutineComponent;
  let fixture: ComponentFixture<ProRutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProRutineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProRutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
