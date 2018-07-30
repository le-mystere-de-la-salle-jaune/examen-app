import { Injectable } from '@angular/core';
import { Examen, Question, ResultQuestion } from '../domains'
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from '../../../node_modules/rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExamensService {

  constructor(private _http: HttpClient) {
  }

listerExamens(id: string): Observable<Examen[]> {
    return this._http.get(`${environment.backendUrl}/api/examens/${id}`).pipe(
      map(
        (data: any[]) => data.map(el => new Examen(el.id, el.titre))
      )
    )
  }

 demanderQuestion(idExamen: string, idStagiaire: string): Observable<Question> {
  return this._http.get(`${environment.backendUrl}/api/examens/${idExamen}/${idStagiaire}`).pipe(
    map ((data: any) => data)
  )
}


  sendResQuestion(rep): Observable<ResultQuestion> {
    {

      return this._http.post(`${environment.backendUrl}/api/examens/reponse`, rep).pipe(
          map ((el: any) => new ResultQuestion(el.id_stagiaire, el.id_examen, el.id_question, el.id_option_question))
        )
    }
  }

}
