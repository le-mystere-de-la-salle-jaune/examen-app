import { Injectable } from '@angular/core';
import { Examen } from '../domains'
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamensService {

  constructor(private _http: HttpClient) { }

  // listerExamens(id: string): Promise<Examen[]> {
  //   return this._http.get(`${environment.backendUrl}/api/examens/${id}`)
  //     .toPromise()
  //     .then(
  //       (data: any[]) => data.map(el => new Examen(el.id, el.titre))
  //     )
  // }

  listerExamens(id: string): Observable<Examen[]> {
    return this._http.get(`${environment.backendUrl}/api/examens/${id}`).pipe(
      map(
        (data: any[]) => data.map(el => new Examen(el.id, el.titre))
      )
    )
  }

}
