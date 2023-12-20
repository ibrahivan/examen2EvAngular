import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { PuestosDisponibles } from 'src/app/shared/puestos-disponibles';


@Component({
  selector: 'app-listado-puestos',
  templateUrl: './listado-puestos.component.html',
  styleUrls: ['./listado-puestos.component.css']
})
export class ListadoPuestosComponent {
  puestos_disp:PuestosDisponibles[] = [];

  constructor(
    private dataService: DatosService,
    private router: Router
  ){}

  ngOnInit(){
    this.dataService.getColeccion('puestos_disp').subscribe(
      res => this.puestos_disp = res
    )  
  }
  eliminarPuesto(id:string){
    this.dataService.deleteDocumento('puestos_disp', id).then(
      res => console.log("Puesto borrado correctamente")
    ).catch(error => console.log(error));
  }
}
