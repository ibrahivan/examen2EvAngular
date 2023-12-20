import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosComponent } from './candidatos.component';
import { ListadoCandidatosComponent } from './listado-candidatos/listado-candidatos.component';
import { FormularioCandidatosComponent } from './formulario-candidatos/formulario-candidatos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatosComponent,
    ListadoCandidatosComponent,
    FormularioCandidatosComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CandidatosModule { }
