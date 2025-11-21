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
}
