import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/guards';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];
