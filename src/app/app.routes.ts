import { Routes } from '@angular/router';
import { LayoutModule } from './public/layout-module';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./public/layout-module').then(m => LayoutModule)}
];
