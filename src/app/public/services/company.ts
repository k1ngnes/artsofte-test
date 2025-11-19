import { inject, Injectable } from '@angular/core';
import { TCompanyItem, TCompanyItemResponse } from '../model/company.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Company {
  http = inject(HttpClient);

  companyItems: Array<TCompanyItem> = [
    {
      id: 123,
      uid: 'sgfdsgsdgfsdg',
      business_name: 'something of a name',
      suffix: 'fosjfs',
      industry: 'fkjsdlfgkj',
      type: 'fkjfslkfgj',
      catch_phrase: 'gfdkjgldskgjf',
      phone_number: 'fo12121212',
      full_address: 'lkfdsgjldskgfj',
      lattitude: 121234124,
      longitude: 123434,
      logo: 'jfglkfjg',
    },
  ];

  getCompanyItems() {
    const url = 'https://faker-api.milki.space/companies';
    return this.http.get<TCompanyItemResponse>(url);
  }
}
