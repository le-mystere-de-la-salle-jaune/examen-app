import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Resultat } from '../domains';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultatsService {

  constructor(private _http: HttpClient) { }

  // listerResultats(id: string): Promise<Resultat[]> {
  //   return this._http.get(`${environment.backendUrl}/api/examens/notes/${id}`)
  //     .toPromise()
  //     .then(
  //       (data: any[]) => data.map(el => new Resultat(el.id, el.titre, el.nbQuestions, el.noteSur20))
  //     )
  // }

  listerResultats(id: string): Observable<Resultat[]> {
    return this._http.get(`${environment.backendUrl}/api/examens/notes/${id}`).pipe(
      map(
        (data: any[]) => data.map(el => new Resultat(el.id, el.titre, el.nbQuestions, el.noteSur20))
      )
    )
  }
}
