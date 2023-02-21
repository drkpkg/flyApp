import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), pathMatch: "full"},
  {
    path: 'clients',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    pathMatch: "full"
  },
  {
    path: 'clients/:id',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    pathMatch: "full"
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    pathMatch: "full"
  },
  {
    path: 'employees/:id',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    pathMatch: "full"
  },
  {
    path: 'flights',
    loadChildren: () => import('./pages/flight/flight.module').then(m => m.FlightModule),
    pathMatch: "full"
  },
  {
    path: 'flights/:id',
    loadChildren: () => import('./pages/flight/flight.module').then(m => m.FlightModule),
    pathMatch: "full"
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule),
    pathMatch: "full"
  },
  {
    path: 'sales/:id',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule),
    pathMatch: "full"
  },
  {
    path: 'aircrafts',
    loadChildren: () => import('./pages/aircraft/aircraft.module').then(m => m.AircraftModule),
    pathMatch: "full"
  },
  {
    path: 'aircrafts/:id',
    loadChildren: () => import('./pages/aircraft/aircraft.module').then(m => m.AircraftModule),
    pathMatch: "full"
  },
  {
    path: 'airports',
    loadChildren: () => import('./pages/airport/airport.module').then(m => m.AirportModule),
    pathMatch: "full"
  },
  {
    path: 'airports/:id',
    loadChildren: () => import('./pages/airport/airport.module').then(m => m.AirportModule),
    pathMatch: "full"
  },
  {
    path: 'cities',
    loadChildren: () => import('./pages/city/city.module').then(m => m.CityModule),
    pathMatch: "full"
  },
  {
    path: 'cities/:id',
    loadChildren: () => import('./pages/city/city.module').then(m => m.CityModule),
    pathMatch: "full"
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule),
    pathMatch: "full"
  },
  {
    path: 'countries/:id',
    loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule),
    pathMatch: "full"
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
