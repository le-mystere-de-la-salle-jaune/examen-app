import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Stagiaire } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private _http: HttpClient) { }

  listerStagiaires(): Promise<Stagiaire[]> {
    return this._http.get(`${environment.backendUrl}/api/stagiaires`).toPromise()
      .then(
        (data: any[]) => data.map(el => new Stagiaire(el.nom, el.prenom, el.email, el.photo_url))
      );
  }
}
