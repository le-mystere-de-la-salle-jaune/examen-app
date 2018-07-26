import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        (data: any[]) => data.map(el => new Stagiaire(el.id, el.nom, el.prenom, el.email, el.photo_url))
      );
  }

  listerStagiaire(id: string): Promise<Stagiaire> {
    return this._http.get(`${environment.backendUrl}/api/stagiaires/${id}`).toPromise()
      .then(
        (data: any) => new Stagiaire(data.id, data.nom, data.prenom, data.email, data.photo_url)
      );
  }

  updateStagiaire(ngForm):Promise<Stagiaire> {
    return this._http.put(`${environment.backendUrl}/api/stagiaires`, ngForm)
      .toPromise()
      .then(
        (el: any) => new Stagiaire(el.id, el.nom, el.prenom, el.email, el.photo_url)      )
  }
}

