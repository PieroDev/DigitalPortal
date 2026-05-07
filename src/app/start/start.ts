import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { FadeInViewDirective } from '../fade-in-view.directive';

@Component({
  selector: 'app-start',
  imports: [FontAwesomeModule, FadeInViewDirective],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  faCoffee = faCoffee;
}
