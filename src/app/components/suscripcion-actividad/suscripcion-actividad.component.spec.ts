import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionActividadComponent } from './suscripcion-actividad.component';

describe('SuscripcionActividadComponent', () => {
  let component: SuscripcionActividadComponent;
  let fixture: ComponentFixture<SuscripcionActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuscripcionActividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuscripcionActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
