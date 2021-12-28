import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'users', component: UserListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
