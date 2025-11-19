import { Component, input } from '@angular/core';

@Component({
  selector: 'app-company-item',
  imports: [],
  templateUrl: './company-item.html',
  styleUrl: './company-item.scss',
})
export class CompanyItem {
  logo = input('');
  business_name = input('');
  suffix = input('');
}
