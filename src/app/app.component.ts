import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Pipes Practice';

  date = new Date();

  amount = 10;
}
