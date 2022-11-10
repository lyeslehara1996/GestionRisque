import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPermissionsComponent } from './gestion-permissions.component';

describe('GestionPermissionsComponent', () => {
  let component: GestionPermissionsComponent;
  let fixture: ComponentFixture<GestionPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
