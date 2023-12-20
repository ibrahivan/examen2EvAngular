import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private afs:Firestore
  ) { }
//LA COLECCION ES EL SIMIL A UNA TABLA EN BBDD, ENTONCES EN ESTE METODO DEVOLVERIA TODOS LOS DATOS DE LA "TABLA"
  getColeccion(coleccion: string){
    const coleccionRef = collection(this.afs, coleccion);
    return collectionData(coleccionRef, { idField: 'id' }) as Observable<any[]>;
  }

  // UN DOCUMENTO SERIA EL SIMIL A UNA FILA DE UNA TABLA DE LA BBDD, ENTONCES EN ESTE METODO DEVOLVERIA LOS DATOS DE UN ELEMENTO EN CONCRETO
  getDocumento(coleccion: string, docId: string){
    const coleccionRef = collection(this.afs, `${coleccion}/${docId}`);
    return collectionData(coleccionRef, { idField: 'id' }) as Observable<any>;
  }

  addDocumento(coleccion: string, documento:any){
    const coleccionRef = collection(this.afs, coleccion);
    return addDoc(coleccionRef, documento);
  }

  updateDocumento(coleccion: string, documento: any){
    const documentRef = doc(this.afs, `${coleccion}/${documento.id}`);
    return updateDoc(documentRef, documento);
  }

  deleteDocumento(coleccion: string, docId: string){
    const documentRef = doc(this.afs, `${coleccion}/${docId}`);
    return deleteDoc(documentRef);
  }

  getConsulta(coleccion: string, campo: string, valor:any){
  const coleccionRef = collection(this.afs, coleccion);
  const queryRef = query(coleccionRef, where(campo, '==', valor));   
  return collectionData(queryRef, { idField: 'id' }) as Observable<any[]>; 
  }

}
