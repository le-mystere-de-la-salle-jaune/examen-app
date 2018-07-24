import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains'
@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss']
})
export class ListeStagiaireComponent implements OnInit {

  private stagiaires:Array<Stagiaire> = [];

  constructor() { 

      this.stagiaires.push(
        new Stagiaire('kaczmarek', 'noel', 'kaczmarek.noel@gmail.com', 'img'),
        new Stagiaire('kaczmarek2', 'noel2', 'kaczmarek.noel2@gmail.com', 'img2'),
        new Stagiaire('kaczmarek3', 'noel3', 'kaczmarek.noel3@gmail.com', 'img3'),
        new Stagiaire('kaczmarek4', 'noel4', 'kaczmarek.noel4@gmail.com', 'img4')
    )
   }

  ngOnInit() {
  }

}
