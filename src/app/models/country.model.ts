
export default class Country {
  id?: number;
  name: string;
  demonym: string;
  active: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    this.name = '';
    this.demonym = '';
    this.active = true;
  }

  static fromJson(json: any): Country {
    const country = new Country();
    country.id = json.id;
    country.name = json.name;
    country.demonym = json.demonym;
    country.active = json.active;
    country.created_at = json.created_at;
    country.updated_at = json.updated_at;
    return country;
  }

  static fromJsonList(json: any[]): Country[] {
    return json.map(Country.fromJson);
  }
}
