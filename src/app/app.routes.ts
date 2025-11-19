import { Routes } from '@angular/router';
import { LayoutModule } from './public/layout-module';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./public/layout-module').then((m) => LayoutModule),
  },
];
