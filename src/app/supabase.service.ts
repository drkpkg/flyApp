import {Injectable} from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session, SupabaseClient,
  User,
} from '@supabase/supabase-js'
import {environment} from 'src/enviroments/environment';

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get session() {
    this.supabase.auth.getSession().then(({data}) => {
      this._session = data.session
    })
    return this._session
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({email: email, password: password})
  }

  signOut() {
    return this.supabase.auth.signOut()
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update)
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  // Methods

  async countries() {
    const {data, error} = await this.supabase.from('countries').select('*');
    return {data, error};
  }

  async createUser(email: string, password: string) {
    const {data, error} = await this.supabase.auth.signUp({email, password});
    return {data, error};
  }

  async getUsers() {
    const {data, error} = await this.supabase.from('user_list').select('*');
    return {data, error};
  }

  async signInWithToken(token: any) {
    const {data, error} = await this.supabase.auth.refreshSession()
    return {data, error};
  }

  async getCustomerView() {
    const {data, error} = await this.supabase.from('customer_view').select('*');
    return {data, error};
  }

  async createCustomer(name: string, surname: string, lastname: string, identity_document: string, email: string, phone: string, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_customer_person', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      email: email,
      phone: phone,
      active: active
    });
    return {data, error};
  }

  async createCountry(name: string) {
    const {data, error} = await this.supabase.from('countries').insert([
      {name: name, active: true}
    ]);
    return {data, error};
  }

  country(countryId: number) {
    return this.supabase.from('countries').select('*').eq('id', countryId);
  }

  async getFlightStaffView() {
    const {data, error} = await this.supabase.from('flight_staff_view').select('*');
    return {data, error};
  }

  async createFlightStaff(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, flight_license: string, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_flight_staff', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      flight_license: flight_license,
      active: active
    });
    return {data, error};
  }

  async getStaffView() {
    const {data, error} = await this.supabase.from('staff_view').select('*');
    return {data, error};
  }

  async createStaff(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_staff', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      active: active
    });
    return {data, error};
  }

  async getReceptionistView() {
    const {data, error} = await this.supabase.from('receptionist_view').select('*');
    return {data, error};
  }

  async createReceptionist(name: string, surname: string, lastname: string, identity_document: string, occupation_id: number, active: boolean) {
    const {data, error} = await this.supabase.rpc('create_receptionist', {
      name: name,
      surname: surname,
      lastname: lastname,
      identity_document: identity_document,
      occupation_id: occupation_id,
      active: active
    });
    return {data, error};
  }

  async createSale(customer_id: number, flight_id: number, passenger_data: any[], payment_method_id: number, unit_price: number) {
    const {data, error} = await this.supabase
      .rpc('create_flight_sale', {
        customer_id,
        flight_id,
        passenger_data,
        payment_method_id,
        unit_price,
      })
    return {data, error}
  }

  async sales() {
    const {data, error} = await this.supabase.from('sales')
      .select('id, date, unit_price, total_price, customer: customer_id (id, person: person_id (name, surname, lastname, identity_document)), flight: flight_id (id, code), payment_method: payment_method_id (id, name), created_at, updated_at')
    return {data, error};
  }

  async flights() {
    const {
      data,
      error
    } = await this.supabase.from('flights').select('id, code, arrival_date, departure_date, created_at, updated_at, vehicle_id, route_id, price')
    return {data, error};
  }

  async paymentMethods() {
    const {data, error} = await this.supabase.from('payment_methods').select('*')
    return {data, error};
  }
}
