import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start} from './start/start';
import { Benefits } from './benefits/benefits';
import { Services } from './services/services';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start, FontAwesomeModule, Benefits, Services],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DigitalPortal');
  faCoffee = faCoffee;
}
