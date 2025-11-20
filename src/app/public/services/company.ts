import { inject, Injectable, InputSignal } from '@angular/core';
import { TCompanyItem, TCompanyItemResponse } from '../model/company.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Company {
  http = inject(HttpClient);

  getCompanyItems(page: number, per_page: number) {
    const url =
      'https://faker-api.milki.space/companies' +
      '?' +
      'page=' +
      page +
      '&' +
      'per_page=' +
      per_page;
    return this.http.get<TCompanyItemResponse>(url);
  }

  getOneCompany(id: InputSignal<number>) {
    const url = 'https://faker-api.milki.space/companies/' + id();

    return this.http.get<TCompanyItem>(url);
  }
}
