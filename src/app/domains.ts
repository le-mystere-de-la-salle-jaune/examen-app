export class Stagiaire{

    constructor(private _nom:string, private _prenom:string, private _email:string, private _photoUrl:string){

    }

    get nom() { return this.nom }
    set nom(nom:string) { this._nom = nom }

    get prenom() { return this.prenom }
    set prenom(prenom:string) { this._prenom = prenom }

    get email() { return this.email }
    set email(email:string) { this._email = email }

    get photoUrl() { return this.photoUrl }
    set photoUrl(photoUrl:string) { this._photoUrl = photoUrl }
}