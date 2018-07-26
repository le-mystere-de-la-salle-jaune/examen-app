import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../domains';
import { StagiaireService } from '../service/stagiaire.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  stagiaire = Stagiaire.empty();
  stagiaireId: string;

  constructor(private stagiaireService: StagiaireService, private route: ActivatedRoute, private router: Router, private cookie:CookieService) {
    this.stagiaireId = route.snapshot.paramMap.get("id");
     stagiaireService.listerStagiaire(this.stagiaireId)
      .then((s: Stagiaire) =>this.stagiaire =s)
      .catch(err => console.log(err));
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.stagiaire);
    this.stagiaireService.updateStagiaire(this.stagiaire).then(
      s => { 
        this.cookie.delete('email');
        this.router.navigate(['/']);
      }
    );
  }

}
