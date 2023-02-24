export default class Receptionist { 
    id : number;
    name : string;
    surname : string;
    lastname : string;
    identity_document : string;
    occupation_name: string;


    constructor (){
        this.id = 0;
        this.name = '';
        this.surname = '';
        this.lastname = '';
        this.identity_document = '';
        this.occupation_name = '';
    }

    static fromJson(json: any): Receptionist{
        let receptionist = new Receptionist();
        receptionist.id = json.id;
        receptionist.name = json.name;
        receptionist.surname = json.surname;
        receptionist.lastname = json.lastname;
        receptionist.identity_document = json.identity_document;
        receptionist.occupation_name = json.occupation_name;
        return receptionist
    }

    static fromJsonList(json: any[]): Receptionist[]{
        let receptionists: Receptionist[] = [];
        json.forEach((value) => {
        receptionists.push(Receptionist.fromJson(value));
        });
        return receptionists;
    }

    
    public get fullName() : string {
        return `${this.name} ${this.surname} ${this.lastname}`
    }
    
}