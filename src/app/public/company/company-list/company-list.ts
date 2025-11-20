import { Component, inject, OnInit, signal } from '@angular/core';
import { Company } from '../../services/company';
import { TSorting, TCompanyItem } from '../../model/company.type';
import { catchError } from 'rxjs';
import { CompanyItem } from '../company-item/company-item';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { PaginatorIntl } from '../../services/paginator-intl';
import { CompanyFilter } from '../company-filter/company-filter';
import { FilterService } from '../../services/filter-service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CompanySort } from "../company-sort/company-sort";

@Component({
  selector: 'app-company-list',
  imports: [CompanyItem, MatPaginatorModule, RouterLink, CompanyFilter, ReactiveFormsModule, CompanySort],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class CompanyList implements OnInit {
  companyService = inject(Company);
  filterService = inject(FilterService);
  companyItems = signal<Array<TCompanyItem>>([]);
  currentPage = signal(1);
  length = signal(1000);
  per_page = signal(5);
  uniqueIndustries = signal<Set<unknown>>(new Set());
  uniqueTypes = signal<Set<unknown>>(new Set());
  formCheck: any = '';

  constructor(private fb: FormBuilder) {}

  filterForm = this.fb.group({
    name: '',
    type: '',
    industry: '',
  });

  sortForm = this.fb.group({
    sortType: 'id',
    order: 'asc'
  });

  fetchData(): void {
    this.companyService
      .getCompanyItems(
        this.currentPage(),
        this.per_page(),
        this.filterForm.value.name,
        this.filterForm.value.industry,
        this.filterForm.value.type,
        this.sortForm.value.sortType,
        this.sortForm.value.order,
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((companyItemsResponse) => {
        this.companyItems.set(companyItemsResponse.data);
        this.length.set(companyItemsResponse.total);
        if (this.uniqueIndustries().size === 0 && this.uniqueTypes().size === 0) {
          this.uniqueIndustries.set(this.filterService.getIndustries(companyItemsResponse.data));
          this.uniqueTypes.set(this.filterService.getTypes(companyItemsResponse.data));
        }
      });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.currentPage.set(pageEvent.pageIndex + 1);
    this.per_page.set(pageEvent.pageSize);
    this.fetchData();
  }

  handleFilterFormChange() {
    queueMicrotask(() => this.fetchData());
  }

  handleSortFormChange() {
    console.log(this.sortForm.value)
    queueMicrotask(() => this.fetchData());
  }
  
}
