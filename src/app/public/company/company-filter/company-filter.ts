import { Component, input} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss',
})
export class CompanyFilter {
  constructor(private fb: FormBuilder) {}

  childForm = input<FormGroup>(this.fb.group({
    name: '',
    type: '',
    industry: '',
  })); 

  industries = input<Set<unknown>>();
  types = input<Set<unknown>>();

  onSubmit(): void {
    console.log('submitted form', this.childForm().value)
  }

  onFormGroupChange(): void {
    console.log('submitted form', this.childForm().value)
    console.log(this.industries());
  }
}
