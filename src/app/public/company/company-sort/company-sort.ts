import { Component, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-sort',
  imports: [ReactiveFormsModule],
  templateUrl: './company-sort.html',
  styleUrl: './company-sort.scss',
})
export class CompanySort {
  constructor(private fb: FormBuilder) {}

  childForm = input<FormGroup>(
    this.fb.group({
      sortType: 'id',
      order: 'asc',
    })
  );

  isAscSorting(): boolean {
    return this.childForm().value.order === 'asc';
  }

  isDescSorting(): boolean {
    return this.childForm().value.order === 'desc';
  }

  sortCompanies(): void {
    const futureSortingOrder = this.isDescSorting() ? 'asc' : 'desc';
    this.childForm().get('order')?.setValue(futureSortingOrder);
  }
}
