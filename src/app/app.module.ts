import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { CookieService } from '../../node_modules/ngx-cookie-service';

import { AppComponent } from './app.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { ListeStagiaireComponent } from './liste-stagiaire/liste-stagiaire.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeExamensComponent } from './liste-examens/liste-examens.component';
import { ListeResultatsComponent } from './liste-resultats/liste-resultats.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { HeaderComponent } from './header/header.component';
import { ProfilComponent } from './profil/profil.component';

const appRoutes: Routes = [

  { path: 'choix-stagiaires', component: ListeStagiaireComponent }, // /page1 affiche le composant A

  { path: ':id/examens', component: ListeExamensComponent }, // /page2 affiche le composant B

  { path: ':id/resultats', component: ListeResultatsComponent}, 

  { path: ':id/profil', component: ProfilComponent },

  { path: '',   redirectTo: '/choix-stagiaires', pathMatch: 'full' }, // redirige vers la route page1 par défaut

  { path: '**',  component: PageNonTrouveeComponent } // page non trouvée
];


@NgModule({
  declarations: [
    AppComponent,
    ChoixStagiaireComponent,
    BandeauComponent,
    StagiaireComponent,
    ListeStagiaireComponent,
    ListeExamensComponent,
    ListeResultatsComponent,
    PageNonTrouveeComponent,
    HeaderComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule, MDBBootstrapModule, HttpClientModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
