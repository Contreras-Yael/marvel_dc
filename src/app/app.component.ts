import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroListComponent } from './components/hero-list-component/hero-list-component.component';
import { HeroCardComponent } from './components/hero-card-component/hero-card-component.component';
import { SearchBarComponent } from './components/search-bar-component/search-bar-component.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeroCardComponent,
    HeroListComponent,
    SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marvel_dc';
}
