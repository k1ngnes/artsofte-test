import { Component, signal } from '@angular/core';
import { CompanyRoutingModule } from "./public/company/company-routing-module";

@Component({
  selector: 'app-root',
  imports: [CompanyRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('artsofte-test');
}
