import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { StagiaireService } from '../service/stagiaire.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  stagiaire = Stagiaire.empty();
  stagiaireId: string;

  constructor(private stagiaireService: StagiaireService, private route: ActivatedRoute) {
    this.stagiaireId = route.snapshot.paramMap.get("id");
     stagiaireService.listerStagiaire(this.stagiaireId)
      .then((s: Stagiaire) =>this.stagiaire =s)
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.stagiaire);
  }

}
