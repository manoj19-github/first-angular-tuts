import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View2ComponentComponent } from './view2-component.component';

describe('View2ComponentComponent', () => {
  let component: View2ComponentComponent;
  let fixture: ComponentFixture<View2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
