import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosDisponiblesRoutingModule } from './puestos-disponibles-routing.module';
import { PuestosDisponiblesComponent } from './puestos-disponibles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioPuestosComponent } from './formulario-puestos/formulario-puestos.component';
import { ListadoPuestosComponent } from './listado-puestos/listado-puestos.component';


@NgModule({
  declarations: [
    PuestosDisponiblesComponent,
    FormularioPuestosComponent,
    ListadoPuestosComponent
  ],
  imports: [
    CommonModule,
    PuestosDisponiblesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PuestosDisponiblesModule { }
