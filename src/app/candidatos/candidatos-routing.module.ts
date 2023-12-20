import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponent } from './candidatos.component';
import { ListadoCandidatosComponent } from './listado-candidatos/listado-candidatos.component';
import { FormularioCandidatosComponent } from './formulario-candidatos/formulario-candidatos.component';

const routes: Routes = [
  {
    path: '', component: CandidatosComponent, children: [
      { path: 'listado-candidatos', component: ListadoCandidatosComponent },
      { path: 'nuevo-candidato', component: FormularioCandidatosComponent },
      { path: 'editar-candidato/:dni', component: FormularioCandidatosComponent },
      { path: '**', redirectTo: 'listado-candidatos', pathMatch: 'full' }
    ]
  }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
