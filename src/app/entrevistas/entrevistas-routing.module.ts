import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponent } from './entrevistas.component';
import { ListadoEntrevistasComponent } from './listado-entrevistas/listado-entrevistas.component';
import { FormularioEntrevistasComponent } from './formulario-entrevistas/formulario-entrevistas.component';

const routes: Routes = [
  {
    path: '', component: EntrevistasComponent, children: [
      { path: 'listado-entrevistas', component: ListadoEntrevistasComponent },
      { path: 'nueva-entrevista', component: FormularioEntrevistasComponent },
      { path: 'editar-entevista/:id', component: FormularioEntrevistasComponent },
      { path: '**', redirectTo: 'listado-candidatos', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistasRoutingModule { }
