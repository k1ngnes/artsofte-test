import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss',
})
export class CompanyFilter {
  constructor(private fb: FormBuilder) {}
  
  // filterForm = this.fb.group({
  //   name: '',
  //   type: '',
  //   industry: '',
  // })
}
