import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Candidatos } from 'src/app/shared/candidatos';




@Component({
  selector: 'app-listado-candidatos',
  templateUrl: './listado-candidatos.component.html',
  styleUrls: ['./listado-candidatos.component.css']
})


export class ListadoCandidatosComponent {
  candidatos:Candidatos[] = [];
  

  constructor(
    private dataService: DatosService,
    private router: Router
  ){}

  ngOnInit(){
    this.dataService.getColeccion('candidatos').subscribe(
      res => this.candidatos = res
    )  
  }

  editCandidato(id:string){
    this.router.navigateByUrl(`candidatos/editar-candidato/${id}`)
  }

  deleteCandidato(id:string){
    this.dataService.deleteDocumento('candidatos', id).then(
      res => console.log("Candidato borrado correctamente")
    ).catch(error => console.log(error));
  }
}
