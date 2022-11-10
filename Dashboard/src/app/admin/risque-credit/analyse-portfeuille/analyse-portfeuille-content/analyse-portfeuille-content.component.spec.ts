import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePortfeuilleContentComponent } from './analyse-portfeuille-content.component';

describe('AnalysePortfeuilleContentComponent', () => {
  let component: AnalysePortfeuilleContentComponent;
  let fixture: ComponentFixture<AnalysePortfeuilleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePortfeuilleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysePortfeuilleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
