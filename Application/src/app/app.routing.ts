import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './spa/components/home/home.component';
import { AboutComponent } from './spa/components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' }
];

export const AppRoutes = RouterModule.forRoot(routes);
