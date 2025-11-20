import { inject, Injectable, InputSignal } from '@angular/core';
import { TCompanyItem, TCompanyItemResponse } from '../model/company.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Company {
  http = inject(HttpClient);

  getCompanyItems(
    page: number,
    per_page: number,
    q?: string | null,
    industry?: string | null,
    company_type?: string | null,
    sort_by?: string | null,
    sort_order?: string | null
  ) {
    let qUrl = '';
    let industryUrl = '';
    let companyTypeUrl = '';

    if (q) {
      qUrl = '&q=' + q;
    }

    if (industry) {
      industryUrl = '&industry=' + industry;
    }

    if (company_type) {
      companyTypeUrl = '&company_type=' + company_type;
    }
    const url =
      'https://faker-api.milki.space/companies' +
      '?page=' +
      page +
      '&per_page=' +
      per_page +
      qUrl +
      industryUrl +
      companyTypeUrl +
      '&sort_by=' +
      sort_by +
      '&sort_order=' +
      sort_order;

    return this.http.get<TCompanyItemResponse>(url);
  }

  getOneCompany(id: InputSignal<number>) {
    const url = 'https://faker-api.milki.space/companies/' + id();

    return this.http.get<TCompanyItem>(url);
  }
}
