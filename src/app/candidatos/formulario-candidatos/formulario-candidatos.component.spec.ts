import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidatosComponent } from './formulario-candidatos.component';

describe('FormularioCandidatosComponent', () => {
  let component: FormularioCandidatosComponent;
  let fixture: ComponentFixture<FormularioCandidatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioCandidatosComponent]
    });
    fixture = TestBed.createComponent(FormularioCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
