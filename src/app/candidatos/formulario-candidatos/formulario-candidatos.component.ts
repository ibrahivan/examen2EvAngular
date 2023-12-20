import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-formulario-candidatos',
  templateUrl: './formulario-candidatos.component.html',
  styleUrls: ['./formulario-candidatos.component.css']
})
export class FormularioCandidatosComponent {

  formCandidato= this.formBuilder.group({
    id:[""],
    nombre:["",Validators.required],
    apellidos:["",Validators.required],
    dni:["",Validators.required],
    direccion:["",Validators.required],
    telefono:["",Validators.required],
    mail:["",Validators.required],
    fecha_nacimiento:["",Validators.required],
    
  });
  //declaramos dni que lo usaremos como id
  dni:any;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private datosService: DatosService
    )
    {}

  

  ngOnInit() {
    if (this.activateRoute.snapshot.paramMap.get('dni')) {
      this.dni = this.activateRoute.snapshot.paramMap.get('dni');
      this.datosService.getDocumento('candidatos', this.dni).subscribe(
        res => this.formCandidato.setValue(res)
      );
    }
    console.log(this.dni);
  }
  guardarCandidato() {
    if (this.dni) {
      //en caso que exista el dni, actualizamos el candidato
      this.datosService.updateDocumento('candidatos', this.formCandidato.value).then(
        res => {console.log('Documento actualizado!')
        //te pone en blanco el formulario, despues de guardarlo
        this.formCandidato.reset();
      }
      ).catch(error => console.error(error));
    }
    else {
      //en caso que no exista el id, creamos el candidato
      this.datosService.addDocumento('candidatos', this.formCandidato.value).then(
        res => {console.log('Documento guardado')
        this.router.navigateByUrl('candidatos/listado-candidatos');
      }
      ).catch(error => console.log(error));
    }
  }


 
}
