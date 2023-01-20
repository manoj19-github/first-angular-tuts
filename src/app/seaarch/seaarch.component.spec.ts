import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaarchComponent } from './seaarch.component';

describe('SeaarchComponent', () => {
  let component: SeaarchComponent;
  let fixture: ComponentFixture<SeaarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaarchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
