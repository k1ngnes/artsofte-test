import { Routes } from '@angular/router';
import { LayoutModule } from './public/layout-module';
import { PageNotFound } from './public/components/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/layout-module').then((m) => LayoutModule),
  },

  {
    path: '**', component: PageNotFound
  }
];
