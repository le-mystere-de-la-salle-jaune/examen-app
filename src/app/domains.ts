export class Stagiaire {
    constructor(private _id: number, private _nom: string, private _prenom: string, private _mail: string, private _photoUrl: string) {

    }

    get id() { return this._id }

    get nom() { return this._nom }
    set nom(nom: string) { this._nom = nom }

    get prenom() { return this._prenom }
    set prenom(prenom: string) { this._prenom = prenom }

    get mail() { return this._mail }
    set mail(mail: string) { this._mail = mail }

    get photoUrl() { return this._photoUrl }
    set photoUrl(url) { this._photoUrl = url }
}

export class Examen {
    constructor(private _id: number, private _titre: string) {

    }

    get id() { return this._id }
    get titre() { return this._titre }
}

export class Resultat {
    constructor(private _id: number, private _titre: string, private _nbQuestions: number, private _noteSur20: number) {

    }

    get id() { return this._id }
    get titre() { return this._titre }
    get nbQuestions() { return this._nbQuestions }
    get noteSur20() { return this._noteSur20 }
}