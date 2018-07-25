import { Injectable } from '@angular/core';
import { Examen } from '../domains'
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamensService {

  constructor(private _http: HttpClient) { }

  listerExamens(id:string):Promise<Examen[]>{
    return this._http.get(`${environment.backendUrl}/api/examens/${id}`)
                .toPromise()
                  .then(
                    (data:any[]) => data.map(el => new Examen(el.id, el.titre))
                  )
  }
}
