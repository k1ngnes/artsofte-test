import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Company } from '../../services/company';
import { TCompanyItem } from '../../model/company.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  imports: [],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss',
})
export class CompanyDetail implements OnInit {
  ngOnInit(): void {
    this.companyService
      .getOneCompany(this.id)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((oneCompanyResponse) => {
        this.companyDetail = signal(oneCompanyResponse)
        this.companyDetail.set(oneCompanyResponse)
      });
  }
  id = input.required<number>();
  companyService = inject(Company);
  companyDetail = signal<TCompanyItem>({
    id: 0,
    uid: '0',
    business_name: 'Default business name',
    suffix: 'Default company suffix',
    industry: 'Default industry',
    type: 'Default type',
    catch_phrase: 'Default catch phrase',
    phone_number: 'Default phone number',
    full_address: 'Default address',
    lattitude: 0,
    longitude: 0,
    logo: 'Default logo',
  });
}
