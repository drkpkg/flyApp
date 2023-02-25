export default class Flight {
  id: number | undefined;
  code: string | undefined;
  arrival_date: string | undefined;
  departure_date: string | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;
  vehicle_id: number | undefined;
  route_id: number | undefined;
  price: number | undefined;

  constructor(){
    this.id = undefined;
    this.code = undefined;
    this.arrival_date = undefined;
    this.departure_date = undefined;
    this.created_at = undefined;
    this.updated_at = undefined;
    this.vehicle_id = undefined;
    this.route_id = undefined;
    this.price = undefined;
  }

  static fromJson(json: any): Flight {
    let flight = new Flight();
    flight.id = json.id;
    flight.code = json.code;
    flight.arrival_date = json.arrival_date;
    flight.departure_date = json.departure_date;
    flight.created_at = json.created_at;
    flight.updated_at = json.updated_at;
    flight.vehicle_id = json.vehicle_id;
    flight.route_id = json.route_id;
    flight.price = json.price;
    return flight;
  }

  static fromJsonList(json: any[]): Flight[] {
    let flights: Flight[] = [];
    json.forEach((value) => {
      flights.push(Flight.fromJson(value));
    });
    return flights;
  }
}
