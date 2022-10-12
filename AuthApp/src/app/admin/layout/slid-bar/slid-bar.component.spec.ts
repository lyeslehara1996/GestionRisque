import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidBarComponent } from './slid-bar.component';

describe('SlidBarComponent', () => {
  let component: SlidBarComponent;
  let fixture: ComponentFixture<SlidBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
