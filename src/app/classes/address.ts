export class Address {
  get street() {
    return this._street;
  }

  set street(value) {
    this._street = value;
  }
  get city() {
    return this._city;
  }

  set city(value) {
    this._city = value;
  }
  private _street;
  private _city;
  constructor(street, city) {
    this._street = street;
    this._city = city;
  }
}
