import { Component } from '@angular/core';
import { DateService } from './services/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly tomorrow: string;

  constructor(private readonly dateService: DateService) {
    this.tomorrow = this.dateService.getTomorrowData();//'2022/06/30';
  }
}
