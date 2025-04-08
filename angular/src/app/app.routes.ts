import { Routes } from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {EditRutineComponent} from './components/edit-rutine/edit-rutine.component';
import {ProRutineComponent} from './components/pro-rutine/pro-rutine.component';
import {CreateRutineComponent} from './components/create-rutine/create-rutine.component';

export const routes: Routes = [
  {path: '', title: "Main Page", component: MainPageComponent},
  {path: 'edit-rutine', title: "Main Page", component: EditRutineComponent},
  {path: 'pro-rutine', title: "Main Page", component: ProRutineComponent},
  {path: 'create-rutine', title: "Main Page", component: CreateRutineComponent},
];
