import { Component, inject, OnInit, signal } from '@angular/core';
import { Company } from '../../services/company';
import { TCompanyItem } from '../../model/company.type';
import { catchError } from 'rxjs';
import { CompanyItem } from '../company-item/company-item';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList implements OnInit {
  companyService = inject(Company);
  companyItems = signal<Array<TCompanyItem>>([]);

  ngOnInit(): void {
    console.log(this.companyService.companyItems);
    this.companyService.getCompanyItems().pipe(catchError((err) => {
      console.log(err);
      throw err;
    })).subscribe((companyItemsResponse => this.companyItems.set(companyItemsResponse.data)))
    
  }
}
