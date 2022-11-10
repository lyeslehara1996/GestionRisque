import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUtilisateursComponent } from './modifier-utilisateurs.component';

describe('ModifierUtilisateursComponent', () => {
  let component: ModifierUtilisateursComponent;
  let fixture: ComponentFixture<ModifierUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierUtilisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
