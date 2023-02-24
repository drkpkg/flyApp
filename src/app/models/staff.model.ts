export default class Staff { 
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

    static fromJson(json: any): Staff{
        let staff = new Staff();
        staff.id = json.id;
        staff.name = json.name;
        staff.surname = json.surname;
        staff.lastname = json.lastname;
        staff.identity_document = json.identity_document;
        staff.occupation_name = json.occupation_name;
        return staff
    }

    static fromJsonList(json: any[]): Staff[]{
        let staffs: Staff[] = [];
        json.forEach((value) => {
        staffs.push(Staff.fromJson(value));
        });
        return staffs;
    }

    
    public get fullName() : string {
        return `${this.name} ${this.surname} ${this.lastname}`
    }
    
}