import { Routes } from '@angular/router';
import {MainPageComponent} from './components/pages/main-page/main-page.component';
import {EditRutineComponent} from './components/pages/edit-rutine/edit-rutine.component';
import {ProRutineComponent} from './components/pages/pro-rutine/pro-rutine.component';
import {CreateRutineComponent} from './components/pages/create-rutine/create-rutine.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';

export const routes: Routes = [
  {path: '', title: "Main Page", component: MainPageComponent},
  {path: 'edit-rutine', title: "Edit Rutine", component: EditRutineComponent},
  {path: 'pro-rutine', title: "Pro rutine", component: ProRutineComponent},
  {path: 'create-rutine', title: "Create Rutine", component: CreateRutineComponent},
  {path: 'profile', title: "Profile", component: ProfileComponent},
  {path: 'login', title: "Login", component: LoginComponent},
  {path: 'register', title: "Register", component: RegisterComponent},
];
