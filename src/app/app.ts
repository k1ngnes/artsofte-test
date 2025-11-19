import { Component, signal } from '@angular/core';
import { CompanyRoutingModule } from "./public/company/company-routing-module";
import { CompanyList } from "./public/company/company-list/company-list";
import { Layout } from "./public/layout";

@Component({
  selector: 'app-root',
  imports: [CompanyRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('artsofte-test');
}
