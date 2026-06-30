import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchBarComponent } from '../search-bar-component/search-bar-component.component';

@Component({
  selector: 'navbar-sup',
  imports: [RouterLink,RouterOutlet,SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


}
