import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { PieComponent } from './layout/pie/pie.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchByLoginPipe } from './pipes/search-by-login.pipe';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatSelectModule} from '@angular/material/select';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    LoginComponent,
    UserListComponent,
    HighlightDirective,
    SearchByLoginPipe,
    UserEditComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    GaleriaComponent,
    CrudComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
