import { Component, inject, OnInit, signal } from '@angular/core';
import { Company } from '../../services/company';
import { TCompanyItem } from '../../model/company.type';
import { catchError } from 'rxjs';
import { CompanyItem } from '../company-item/company-item';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { PaginatorIntl } from '../../services/paginator-intl';

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, MatPaginatorModule, RouterLink,],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}]
})
export class CompanyList implements OnInit {
  companyService = inject(Company);
  companyItems = signal<Array<TCompanyItem>>([]);
  currentPage = signal(1);
  length = signal(1000);
  per_page = signal(5);

  ngOnInit(): void {
    this.companyService
      .getCompanyItems(this.currentPage(), this.per_page())
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((companyItemsResponse) => {
        this.companyItems.set(companyItemsResponse.data);
        this.length.set(companyItemsResponse.total);
      });
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage.set(pageEvent.pageIndex + 1);
    this.per_page.set(pageEvent.pageSize);
    this.companyService
      .getCompanyItems(this.currentPage(), this.per_page())
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((companyItemsResponse) => {
        this.companyItems.set(companyItemsResponse.data);
        this.length.set(companyItemsResponse.total);
      });
  }
}
