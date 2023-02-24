export default class FlightStaff { 
    id : number;
    name : string;
    surname : string;
    lastname : string;
    identity_document : string;
    occupation_name: string;
    flight_license: string;


    constructor (){
        this.id = 0;
        this.name = '';
        this.surname = '';
        this.lastname = '';
        this.identity_document = '';
        this.occupation_name = '';
        this.flight_license = ''
    }

    static fromJson(json: any): FlightStaff{
        let flightStaff = new FlightStaff();
        flightStaff.id = json.id;
        flightStaff.name = json.name;
        flightStaff.surname = json.surname;
        flightStaff.lastname = json.lastname;
        flightStaff.identity_document = json.identity_document;
        flightStaff.occupation_name = json.occupation_name;
        flightStaff.flight_license = json.flight_license
        return flightStaff
    }

    static fromJsonList(json: any[]): FlightStaff[]{
        let flightStaffs: FlightStaff[] = [];
        json.forEach((value) => {
        flightStaffs.push(FlightStaff.fromJson(value));
        });
        return flightStaffs;
    }

    
    public get fullName() : string {
        return `${this.name} ${this.surname} ${this.lastname}`
    }
    
}