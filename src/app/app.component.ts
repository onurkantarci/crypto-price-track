import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedCurrency: string = 'USD';
  constructor(private currencyService: CurrencyService) {}
  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
