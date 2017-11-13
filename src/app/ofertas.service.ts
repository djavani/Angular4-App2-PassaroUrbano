import { Http } from '@angular/http'
import {Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Oferta } from './shared/oferta.model'

import { URL_API } from './app.api';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class OfertasService {  
  
  constructor(private http: Http){

  }

  public getOfertas(): Promise<Oferta[]>{    
    //efetuar uma requisicao http 
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json())
      //retonar um promise Oferta[]
    
  }

  public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    .toPromise()
    .then((resposta: any) => resposta.json())
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then((resposta: any) => {      
      return resposta.json()[0]
    })
  }

  public getComoUsarOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then((resposta: any) =>{      
      return resposta.json()[0].descricao
    })

  }  

  public getOndeFicaOfertaPorId(id: number): Promise<string>{
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then((resposta: any) =>{      
      return resposta.json()[0].descricao
    })

  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?descricao_oferta=${termo}`)
    .map((reposta: any)=> reposta.json())
  }

}