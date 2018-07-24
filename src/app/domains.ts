export class Stagiaire{
    constructor(private _nom:string, private _prenom:string, private _mail:string, private _photoUrl:string){

    }

    get nom() {return this._nom}
    set nom(nom:string){ this._nom = nom }

    get prenom() { return this._prenom }
    set prenom(prenom:string){ this._prenom = prenom }

    get mail () { return this._mail }
    set mail(mail:string) { this._mail = mail }

    get photoUrl() { return this._photoUrl }
    set photoUrl(url) { this._photoUrl = url }
}