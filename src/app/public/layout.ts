import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
