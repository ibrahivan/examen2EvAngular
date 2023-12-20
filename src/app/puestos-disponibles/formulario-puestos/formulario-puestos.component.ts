import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-puestos',
  templateUrl: './formulario-puestos.component.html',
  styleUrls: ['./formulario-puestos.component.css']
})
export class FormularioPuestosComponent {
  id:any;

  formPuestoDisponible= this.formBuilder.group({
    id:[""],
    puesto:["",Validators.required],
    empresa:["",Validators.required],
    disponible:["",Validators.required],
  })
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private datosService: DatosService
    )
    {}

    ngOnInit() {
      if (this.activateRoute.snapshot.paramMap.get('id')) {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.datosService.getDocumento('puestos-disponibles', this.id).subscribe(
          res => this.formPuestoDisponible.setValue(res)
        );
      }
      console.log(this.id);
    }

    guardarPuesto() {
      if (this.id) {
        //en caso que exista el dni, actualizamos el puewsto
        this.datosService.updateDocumento('puestos-disponibles', this.formPuestoDisponible.value).then(
          res => {console.log('Documento actualizado!')
          //te pone en blanco el formulario, despues de guardarlo
          this.formPuestoDisponible.reset();
        }
        ).catch(error => console.error(error));
      }
      else {
        //en caso que no exista el id, creamos el puesto
        this.datosService.addDocumento('puestos-disponibles', this.formPuestoDisponible.value).then(
          res => {console.log('Documento guardado')
          this.router.navigateByUrl('puestos-disponibles/listado-puestos');
        }
        ).catch(error => console.log(error));
      }
    }
  
}
