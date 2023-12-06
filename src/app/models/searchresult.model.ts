export class SearchResultModel{
    private _name: string;
    private _url: string;

    constructor(){
        this._name = "";
        this._url = "";
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get url(): string {
        return this._url;
    }

    public set url(value: string) {
        this._url = value;
    }
}