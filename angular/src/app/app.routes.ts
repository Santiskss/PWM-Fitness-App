import { Routes } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {EditRutineComponent} from './components/edit-rutine/edit-rutine.component';
import {ProRutineComponent} from './components/pro-rutine/pro-rutine.component';
import {CreateRutineComponent} from './components/create-rutine/create-rutine.component';
import {ProfileComponent} from './components/profile/profile.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

export const routes: Routes = [
  {path: '', title: "Main Page", component: MainPageComponent},
  {path: 'edit-rutine', title: "Main Page", component: EditRutineComponent},
  {path: 'pro-rutine', title: "Main Page", component: ProRutineComponent},
  {path: 'create-rutine', title: "Main Page", component: CreateRutineComponent},
  {path: 'profile', title: "Main Page", component: ProfileComponent},
  {path: 'login', title: "Main Page", component: LoginComponent},
  {path: 'register', title: "Main Page", component: RegisterComponent},
];
