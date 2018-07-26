import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Stagiaire } from '../domains'
@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  @Input() stagiaire:Stagiaire;

  constructor(private cookie:CookieService) { }

  ngOnInit() {
  }

  startCookie(){
    this.cookie.set("email", this.stagiaire.email);
  }
}
