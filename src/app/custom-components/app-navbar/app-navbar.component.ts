import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {
  @Output() toggle = new EventEmitter;

  clickMenu() {
    this.toggle.emit();
  }

}
