export class PokemonModel{
    private _name: string;
    private _height: number;
    private _weight: number;
    private _hp: number;
    private _attack: number;
    private _defense: number;
    private _specialAttack: number;
    private _specialDefense: number;
    private _speed: number;
    private _backDefault: string;
    private _backShiny: string;
    private _frontDefault: string;
    private _frontShiny: string;

    constructor(){
        this._name = "";
        this._height = 0;
        this._weight = 0;
        this._hp = 0;
        this._attack = 0;
        this._defense = 0;
        this._specialAttack = 0;
        this._specialDefense = 0;
        this._speed = 0;
        this._backDefault = "";
        this._backShiny = "";
        this._frontDefault = "";
        this._frontShiny = "";
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get weight(): number {
        return this._weight;
    }

    public set weight(value: number) {
        this._weight = value;
    }

    public get hp(): number {
        return this._hp;
    }

    public set hp(value: number) {
        this._hp = value;
    }

    public get attack(): number {
        return this._attack;
    }

    public set attack(value: number) {
        this._attack = value;
    }

    public get defense(): number {
        return this._defense;
    }

    public set defense(value: number) {
        this._defense = value;
    }

    public get specialAttack(): number {
        return this._specialAttack;
    }

    public set specialAttack(value: number) {
        this._specialAttack = value;
    }

    public get specialDefense(): number {
        return this._specialDefense;
    }

    public set specialDefense(value: number) {
        this._specialDefense = value;
    }

    public get speed(): number {
        return this._speed;
    }

    public set speed(value: number) {
        this._speed = value;
    }

    public get backDefault(): string {
        return this._backDefault;
    }

    public set backDefault(value: string) {
        this._backDefault = value;
    }

    public get backShiny(): string {
        return this._backShiny;
    }

    public set backShiny(value: string) {
        this._backShiny = value;
    }

    public get frontDefault(): string {
        return this._frontDefault;
    }

    public set frontDefault(value: string) {
        this._frontDefault = value;
    }

    public get frontShiny(): string {
        return this._frontShiny;
    }

    public set frontShiny(value: string) {
        this._frontShiny = value;
    }

    public copy():PokemonModel{
        const clone:PokemonModel = new PokemonModel();
        clone._name = this._name;
        clone._height = this._height;
        clone._weight = this._weight;
        clone._hp = this._hp;
        clone._attack = this._attack;
        clone._defense = this._defense;
        clone._specialAttack = this._specialAttack;
        clone._specialDefense = this._specialDefense;
        clone._speed = this._speed;
        clone._backDefault = this._backDefault;
        clone._backShiny = this._backShiny;
        clone._frontDefault = this._frontDefault;
        clone._frontShiny = this._frontShiny;
        return clone;
    }
}