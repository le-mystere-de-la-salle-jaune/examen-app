import { Component, OnInit, Input } from '@angular/core';
import { ExamensService } from '../service/examens.service';
import { Examen } from '../domains';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-examens',
  templateUrl: './liste-examens.component.html',
  styleUrls: ['./liste-examens.component.scss']
})
export class ListeExamensComponent implements OnInit {

  public examens: Array<Examen> = [];

  stagiaireId:string;

  constructor(private _examenService: ExamensService, private route: ActivatedRoute) {
    this.stagiaireId = route.snapshot.paramMap.get("id")
    const examens$ = this._examenService.listerExamens(this.stagiaireId)
      .then(
        (listeExamens: Array<Examen>) => {
          this.examens = listeExamens;
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
