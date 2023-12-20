import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPuestosComponent } from './formulario-puestos.component';

describe('FormularioPuestosComponent', () => {
  let component: FormularioPuestosComponent;
  let fixture: ComponentFixture<FormularioPuestosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPuestosComponent]
    });
    fixture = TestBed.createComponent(FormularioPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
