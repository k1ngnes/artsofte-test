import { Injectable } from '@angular/core';
import { TCompanyItem } from '../model/company.type';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  getIndustries = (companies: Array<TCompanyItem>) => {
    const uniqueIndustries = new Set();
    for (let index = 0; index < companies.length; index++) {
      uniqueIndustries.add(companies[index].industry)
    }

    return uniqueIndustries;
  }

  getTypes = (companies: Array<TCompanyItem>) => {
    const uniqueTypes = new Set();
    for (let index = 0; index < companies.length; index++) {
      uniqueTypes.add(companies[index].type)
    }

    return uniqueTypes;
  }
}
