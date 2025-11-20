import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyList } from './company-list/company-list';
import { CompanyDetail } from './company-detail/company-detail';

const routes: Routes = [
  {
    path: '',
    component: CompanyList,
  },
  { path: 'detail/:id', component: CompanyDetail },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
