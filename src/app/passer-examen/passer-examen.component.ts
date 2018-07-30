import { Component, OnInit } from '@angular/core';
import { Question, ResultQuestion } from '../domains';
import { ExamensService } from '../service/examens.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-passer-examen',
  templateUrl: './passer-examen.component.html',
  styleUrls: ['./passer-examen.component.scss']
})
export class PasserExamenComponent implements OnInit {

  question: Question = new Question(undefined, undefined, undefined, undefined);
  idStagiaire: string;
  idExamen: string;
  idReponse: number;

  constructor(private examenService: ExamensService, private route: ActivatedRoute, private router: Router) {
    this.idStagiaire = route.snapshot.paramMap.get("id");
    this.idExamen = route.snapshot.paramMap.get("idExam");

    examenService.demanderQuestion(this.idExamen, this.idStagiaire)
      .subscribe((q: Question) => this.question = q,
        (err: any) => console.log(err))
  }

  ngOnInit() {
  }
  //   constructor(public id:number, public titre:string, public options:Array<Option>, public last:boolean){
  //   constructor(public id_stagiaire:number, public id_examen:number, public id_question:number, public id_option_question:number){  
  submit() {
    let rep: ResultQuestion = new ResultQuestion(+this.idStagiaire, +this.idExamen, this.question.id, this.idReponse);

    this.examenService.sendResQuestion(rep).subscribe(
      s => {
        this.examenService.demanderQuestion(this.idExamen, this.idStagiaire)
          .subscribe(
            (q: Question) => this.question = q,
            (err: any) => console.log(err)
          )
      }
    );
    if (!this.question.last) {
      this.router.navigate(['/' + this.idStagiaire + '/resultats'])
    }
  }
}
