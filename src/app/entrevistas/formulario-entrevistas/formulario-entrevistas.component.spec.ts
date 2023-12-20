import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntrevistasComponent } from './formulario-entrevistas.component';

describe('FormularioEntrevistasComponent', () => {
  let component: FormularioEntrevistasComponent;
  let fixture: ComponentFixture<FormularioEntrevistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEntrevistasComponent]
    });
    fixture = TestBed.createComponent(FormularioEntrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
