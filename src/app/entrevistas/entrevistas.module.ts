import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrevistasRoutingModule } from './entrevistas-routing.module';
import { EntrevistasComponent } from './entrevistas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEntrevistasComponent } from './listado-entrevistas/listado-entrevistas.component';
import { FormularioEntrevistasComponent } from './formulario-entrevistas/formulario-entrevistas.component';


@NgModule({
  declarations: [
    EntrevistasComponent,
    ListadoEntrevistasComponent,
    FormularioEntrevistasComponent
  ],
  imports: [
    CommonModule,
    EntrevistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrevistasModule { }
