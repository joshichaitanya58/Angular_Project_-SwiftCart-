import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { ReactiveForm } from './pages/reactive_form/reactive-form';
import { ServiceComponent } from './pages/service/service';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  { path: 'cart', component: Cart },
  { path: 'reactive_form', component: ReactiveForm },
  { path: 'service', component: ServiceComponent }
];
