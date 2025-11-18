import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyList } from './company-list/company-list';

const routes: Routes = [
  {
    path: '',
    component: CompanyList,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
