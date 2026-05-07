import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start',
  imports: [FontAwesomeModule],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  faCoffee = faCoffee;
}
