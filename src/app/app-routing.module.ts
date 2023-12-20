import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'candidatos', loadChildren: () => import('./candidatos/candidatos.module').then(m => m.CandidatosModule) },
  
{ path: 'entrevistas', loadChildren: () => import('./entrevistas/entrevistas.module').then(m => m.EntrevistasModule) },
  
{ path: 'puestos-disponibles', loadChildren: () => import('./puestos-disponibles/puestos-disponibles.module').then(m => m.PuestosDisponiblesModule) }
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
