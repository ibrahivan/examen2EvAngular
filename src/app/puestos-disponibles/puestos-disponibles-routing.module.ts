import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestosDisponiblesComponent } from './puestos-disponibles.component';
import { ListadoPuestosComponent } from './listado-puestos/listado-puestos.component';
import { FormularioPuestosComponent } from './formulario-puestos/formulario-puestos.component';

const routes: Routes = [
  {
    path: '', component: PuestosDisponiblesComponent, children: [
      { path: 'listado-puestos', component: ListadoPuestosComponent },
      { path: 'nuevo-puesto', component: FormularioPuestosComponent },
      { path: 'editar-puesto/:id', component: FormularioPuestosComponent },
      { path: '**', redirectTo: 'listado-puestos', pathMatch: 'full' }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosDisponiblesRoutingModule { }
