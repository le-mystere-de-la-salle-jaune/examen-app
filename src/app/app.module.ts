import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { ChoixStagiaireComponent } from './choix-stagiaire/choix-stagiaire.component';
import { StagiaireComponentComponent } from './stagiaire-component/stagiaire-component.component';
import { ListeStagiaireComponentComponent } from './liste-stagiaire-component/liste-stagiaire-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponentComponent,
    ChoixStagiaireComponent,
    StagiaireComponentComponent,
    ListeStagiaireComponentComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
