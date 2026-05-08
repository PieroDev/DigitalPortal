import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Start} from './start/start';
import { Benefits } from './benefits/benefits';
import { Services } from './services/services';
import { Prices } from './prices/prices'
import { Footer } from './footer/footer'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Start, FontAwesomeModule, Benefits, Services, Prices, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('DigitalPortal');
  phoneNumber: string = '+56977542297'; // Replace with your number (e.g., '14155552671')
  
  get whatsappLink(): string {
    // Remove any non-digit characters
    const cleanNumber = this.phoneNumber.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  }
}
