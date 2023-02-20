
export default class Country {
  id?: number;
  name: string;
  denomyn: string;
  active: boolean;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    this.name = '';
    this.denomyn = '';
    this.active = true;
  }

  static fromJson(json: any): Country {
    const country = new Country();
    country.id = json.id;
    country.name = json.name;
    country.denomyn = json.denomyn;
    country.active = json.active;
    country.created_at = json.created_at;
    country.updated_at = json.updated_at;
    return country;
  }

  static fromJsonList(json: any[]): Country[] {
    return json.map(Country.fromJson);
  }
}
