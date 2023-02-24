import {Injectable} from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session, SignInWithIdTokenCredentials,
  SupabaseClient,
  User,
} from '@supabase/supabase-js'
import { last } from 'rxjs';
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
}
