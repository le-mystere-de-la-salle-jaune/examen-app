import { Component, OnInit, Input } from '@angular/core';
import { Stagiaire } from '../domains'

@Component({
  selector: 'app-stagiaire-component',
  templateUrl: './stagiaire-component.component.html',
  styleUrls: ['./stagiaire-component.component.scss']
})
export class StagiaireComponentComponent implements OnInit {

  @Input() stagiaire:Stagiaire;

  constructor() { }

  ngOnInit() {
  }

}
