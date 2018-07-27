import { Component, OnInit } from '@angular/core';
import { Resultat } from '../domains';
import { ResultatsService } from '../service/resultats.service';
import { ActivatedRoute } from '@angular/router';
import { FiltrePipe } from '../pipes/filtre.pipe';

@Component({
  selector: 'app-liste-resultats',
  templateUrl: './liste-resultats.component.html',
  styleUrls: ['./liste-resultats.component.scss']
})
export class ListeResultatsComponent implements OnInit {

  public resultats: Array<Resultat> = []
  stagiaireId: string
  recherche: string //utilisé pour filtrer les résultats

  constructor(private _resultatService: ResultatsService, private route: ActivatedRoute) {
    this.stagiaireId = route.snapshot.paramMap.get("id");
    const examens$ = this._resultatService.listerResultats(this.stagiaireId)
      .then(
        (listeResultats: Array<Resultat>) => {
          this.resultats = listeResultats;
        }
      ).catch(
        (err: any) => {
          console.log(err)
        }
      )
   }

  ngOnInit() {
  }

}
