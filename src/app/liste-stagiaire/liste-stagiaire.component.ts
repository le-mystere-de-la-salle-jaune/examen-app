import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains'
import { StagiaireService } from '../service/stagiaire.service';
@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss']
})
export class ListeStagiaireComponent implements OnInit {

  public stagiaires: Array<Stagiaire> = [];

  constructor(private _stagiaireService: StagiaireService) {
      const stagiaires$ = this._stagiaireService.listerStagiaires();

      stagiaires$
        .then((listeStagiaires: Array<Stagiaire>) => {
          this.stagiaires = listeStagiaires;
        })
        .catch(err => {
          console.log(err)
        });
  }

  ngOnInit() {
  }

}
