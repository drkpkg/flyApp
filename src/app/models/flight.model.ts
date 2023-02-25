export default class Flight {
  id: number;
  code: string ;
  arrival_date: string ;
  departure_date: string ;
  created_at: string ;
  updated_at: string ;
  vehicle_id: number ;
  route_id: number ;
  price: number ;

  constructor(){
    this.id = 0;
    this.code = '';
    this.arrival_date = '';
    this.departure_date = '';
    this.created_at = '';
    this.updated_at = '';
    this.vehicle_id = 0;
    this.route_id = 0;
    this.price = 0;
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
