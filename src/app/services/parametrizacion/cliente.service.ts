import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadModel } from 'src/app/models/parametrizacion/ciudad.model';
import { InmuebleModel } from 'src/app/models/parametrizacion/inmueble.model';
import { UsuarioModel } from 'src/app/models/usuario.model';
import{ ServiceConfig} from '../../config/service.config';
import{ClienteModel} from '../../models/parametrizacion/cliente.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  entity:String ='clientes';
  cuenta: String= 'clientes/count';
  constructor(
    private http: HttpClient
  ) { }
  creacionCliente( model: ClienteModel): Observable <ClienteModel>{
    return this.http.post<ClienteModel>( `${ServiceConfig.BASE_URL}${this.entity}`, model, {
      headers: new HttpHeaders({})
    })
  }
  obtenerCantidadUsuarios(): Observable<number>{
    return this.http.get<number>(`${ServiceConfig.BASE_URL}${this.cuenta}`)
  }
  actualizarUsuario(id: number,model: ClienteModel): Observable<ClienteModel>{//Revisar retorno
    return this.http.put<ClienteModel>( `${ServiceConfig.BASE_URL}${this.entity}/${id}`, model, {
      headers: new HttpHeaders({})
    })
  }
  parcharUsuario(id: number,model: ClienteModel): Observable<ClienteModel>{//Revisar retorno
    return this.http.patch<ClienteModel>( `${ServiceConfig.BASE_URL}${this.entity}/${id}`, model, {
      headers: new HttpHeaders({})
    })
  }
  obtenerUsuario(id: number,model: ClienteModel): Observable<ClienteModel>{//Revisar retorno
    return this.http.get<ClienteModel>( `${ServiceConfig.BASE_URL}${this.entity}/${id}`)
  }
  eliminarUsuario(id: number,model: ClienteModel){//Revisar retorno
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }
  obtenerUsuarios():Observable<ClienteModel[]>{//Sin filtro
    return this.http.get<ClienteModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`)    
  }
  parcharUsuarios(model: ClienteModel):Observable<ClienteModel>{//Sin filtro
    return this.http.patch<ClienteModel>( `${ServiceConfig.BASE_URL}${this.entity}`, model, {
      headers: new HttpHeaders({})
    })
  }
  obtenerUsuarioCliente(idCliente:number):Observable<UsuarioModel>{//Obtiene quien atendio a x usuarios
    return this.http.get<UsuarioModel>(`${ServiceConfig.BASE_URL}${this.entity}/${idCliente}/usuarios`);
  }
  obtenerInmuebleCliente(idCliente:number):Observable<InmuebleModel[]>{//Obtiene el/los inmueble de x usuario
    return this.http.get<InmuebleModel[]>(`${ServiceConfig.BASE_URL}${this.entity}/${idCliente}/inmuebles`);
  }
  crearClienteInmueble(idCliente:number,inmueble:InmuebleModel):Observable<InmuebleModel>{
    return this.http.post<InmuebleModel>(`${ServiceConfig.BASE_URL}${this.entity}/${idCliente}/inmuebles`, inmueble, {
      headers: new HttpHeaders({})
    })
  }
  EliminarClienteInmueble(id:number):Observable<InmuebleModel>{
    return this.http.delete<InmuebleModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}/inmuebles`)
  }
  parcharClienteInmueble(idCliente:number):Observable<InmuebleModel>{
    return this.http.patch<InmuebleModel>(`${ServiceConfig.BASE_URL}${this.entity}/${idCliente}/inmuebles`, {
      headers: new HttpHeaders({})
    })
  }
  obtenerClienteCiudad(id: number): Observable<CiudadModel>{
      return this.http.get<CiudadModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}/ciudad`, {
        headers: new HttpHeaders({})
      })
    }
    
}

