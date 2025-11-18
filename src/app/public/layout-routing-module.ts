import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';

const routes: Routes = [
  {
    path: '', component: Layout,
    children: [
      {
        path: '',
        loadChildren: () => import('./company/company-module').then(m => m.CompanyModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
