export class TodoItem {

    constructor(
        private _name:string,
        private _posponed: boolean,
        private _completed: boolean,
    ){}

    public get name():string {
        return this._name;    
    }

    public set name(name: string) {
        this._name = name;
    }

    public get posponed():boolean {
        return this._posponed;    
    }

    public set posponed(posponed: boolean) {
        this._posponed = posponed;
    }

    public get completed():boolean {
        return this._completed;    
    }

    public set completed(completed: boolean) {
        this._completed = completed;
    }
}
