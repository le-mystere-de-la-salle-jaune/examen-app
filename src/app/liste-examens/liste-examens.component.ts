import { Component, OnInit, Input } from '@angular/core';
import { ExamensService } from '../service/examens.service';
import { Examen } from '../domains';
import { ActivatedRoute } from '@angular/router';
import { FiltrePipe } from '../pipes/filtre.pipe';

@Component({
  selector: 'app-liste-examens',
  templateUrl: './liste-examens.component.html',
  styleUrls: ['./liste-examens.component.scss']
})
export class ListeExamensComponent implements OnInit {

  public examens: Array<Examen> = [];
  stagiaireId: string;
  recherche: string //utilisé pour filtrer les résultats

  constructor(private _examenService: ExamensService, private route: ActivatedRoute) {
    this.stagiaireId = route.snapshot.paramMap.get("id")
    const examens$ = this._examenService.listerExamens(this.stagiaireId)
      .subscribe(
        (listeExamens: Array<Examen>) => {
          this.examens = listeExamens;
        },
        (err: any) => {
          console.log(err)
        }
      )
  }

  ngOnInit() {
  }


}
