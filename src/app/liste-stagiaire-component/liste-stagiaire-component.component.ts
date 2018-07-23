import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains'

@Component({
  selector: 'app-liste-stagiaire-component',
  templateUrl: './liste-stagiaire-component.component.html',
  styleUrls: ['./liste-stagiaire-component.component.scss']
})
export class ListeStagiaireComponentComponent implements OnInit {

  @Input() stagiaires:Array<Stagiaire> = [new Stagiaire('ZZZZ','Zean', 'zzzean@mail.com', 'photo'),
  new Stagiaire('AAAA','toto', 'tt@mail.com', 'photo'),
  new Stagiaire('zoomaster','corentin', 'zooking@mail.com', 'photo'),
  new Stagiaire('macron', 'manu', 'manu@mail.com', 'photo')]

  constructor() { 

  }

  ngOnInit() {
  }

}
