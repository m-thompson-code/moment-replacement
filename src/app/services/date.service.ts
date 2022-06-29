import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  /**
   * Solution using MomentJs
   */
  getTomorrowData(): string {
    return moment().add(1, 'd').format('YYYY-MM-DD');
  }
}
