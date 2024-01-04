class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

const euro = new Currency('EUR', 'Euro');
console.log(euro.displayFullCurrency());

euro.code = 'USD';
euro.name = 'US Dollar';
console.log(euro.displayFullCurrency());
