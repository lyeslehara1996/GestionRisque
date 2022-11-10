import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUtilisateurComponent } from './navigation-utilisateur.component';

describe('NavigationUtilisateurComponent', () => {
  let component: NavigationUtilisateurComponent;
  let fixture: ComponentFixture<NavigationUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
