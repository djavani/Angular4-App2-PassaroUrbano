import { Http } from '@angular/http'
import {Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

  constructor(private http: Http){

  }

  public getOfertas(): Promise<Oferta[]>{    
    //efetuar uma requisicao http 
    return this.http.get('http://localhost:3000/ofertas')
      .toPromise()
      .then((resposta: any) => resposta.json())
      //retonar um promise Oferta[]
    
  }

}