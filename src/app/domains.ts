export class Stagiaire {
    constructor(public id: number, public nom: string, public prenom: string, public email: string, public photo_url: string) {

    }

    static empty():Stagiaire {
        return new Stagiaire(undefined, undefined, undefined, undefined, undefined);
    }
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