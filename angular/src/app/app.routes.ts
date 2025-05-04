import { Routes } from '@angular/router';
import {MainPageComponent} from './components/pages/main-page/main-page.component';
import {ProRutineComponent} from './components/pages/pro-rutine/pro-rutine.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {CalendarComponent} from './components/pages/calendar/calendar.component';
import {FirstPageComponent} from './components/pages/first-page/first-page.component';
import {RoutineComponent} from './components/pages/routine/routine.component';
import {SelectPaymentPlanComponent} from './components/pages/select-payment-plan/select-payment-plan.component';
import {DayEditComponent} from './components/pages/day-edit/day-edit.component';
import {PaymentComponent} from './components/pages/payment/payment.component';
import {RoutineListComponent} from './components/pages/routine-list/routine-list.component';
import {RoutineFormComponent} from './components/pages/routine-form/routine-form.component';
import {EditProfileComponent} from './components/pages/edit-profile/edit-profile.component';

export const routes: Routes = [
  {path: '', title: "Main Page", component: MainPageComponent},
  {path: 'calendar', title: "Register", component: CalendarComponent},
  {path: 'day-edit', title: "Day Edit", component: DayEditComponent},
  {path: 'first-page', title: "Register", component: FirstPageComponent},
  {path: 'login', title: "Login", component: LoginComponent},
  {path: 'main-page', title: "Main Page", component: MainPageComponent},
  {path: 'payment', title: "Payment", component: PaymentComponent},
  {path: 'pro-routine', title: "Pro routine", component: ProRutineComponent},
  {path: 'profile', title: "Profile", component: ProfileComponent},
  {path: 'register', title: "Register", component: RegisterComponent},
  {path: 'routine', title: "Routine", component: RoutineComponent},
  {path: 'routineList', title: "RoutineList", component: RoutineListComponent},
  { path: 'routineForm', title: "RoutineForm", component: RoutineFormComponent},
  { path: 'routineForm/:id', title: "RoutineEdit", component: RoutineFormComponent },
  {path: 'select-payment-plan', title: "Select payment plan", component: SelectPaymentPlanComponent},
  {path: 'edit-profile', title: "Edit Profile", component: EditProfileComponent},
];
