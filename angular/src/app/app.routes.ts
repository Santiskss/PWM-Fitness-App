import { Routes } from '@angular/router';
import {MainPageComponent} from './components/pages/main-page/main-page.component';
import {EditRutineComponent} from './components/pages/edit-rutine/edit-rutine.component';
import {ProRutineComponent} from './components/pages/pro-rutine/pro-rutine.component';
import {CreateRutineComponent} from './components/pages/create-rutine/create-rutine.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {AddExerciseComponent} from './components/pages/add-exercise/add-exercise.component';
import {CalendarComponent} from './components/pages/calendar/calendar.component';
import {FirstPageComponent} from './components/pages/first-page/first-page.component';
import {RutineComponent} from './components/pages/rutine/rutine.component';
import {SelectPaymentPlanComponent} from './components/pages/select-payment-plan/select-payment-plan.component';
import {DayEditComponent} from './components/pages/day-edit/day-edit.component';
import {PaymentComponent} from './components/pages/payment/payment.component';

export const routes: Routes = [
  {path: '', title: "Main Page", component: MainPageComponent},
  {path: 'add_exercise', title: "Register", component: AddExerciseComponent},
  {path: 'calendar', title: "Register", component: CalendarComponent},
  {path: 'create-rutine', title: "Create Rutine", component: CreateRutineComponent},
  {path: 'day-edit', title: "Day Edit", component: DayEditComponent},
  {path: 'edit-rutine', title: "Edit Rutine", component: EditRutineComponent},
  {path: 'first-page', title: "Register", component: FirstPageComponent},
  {path: 'login', title: "Login", component: LoginComponent},
  {path: 'main-page', title: "Main Page", component: MainPageComponent},
  {path: 'payment', title: "Payment", component: PaymentComponent},
  {path: 'pro-rutine', title: "Pro rutine", component: ProRutineComponent},
  {path: 'profile', title: "Profile", component: ProfileComponent},
  {path: 'register', title: "Register", component: RegisterComponent},
  {path: 'rutine', title: "Rutine", component: RutineComponent},
  {path: 'select-payment-plan', title: "Select payment plan", component: SelectPaymentPlanComponent},
];
