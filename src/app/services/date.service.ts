import { Injectable } from '@angular/core';

import { addDays, format } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  /**
   * Solution using date-fns
   */
  getTomorrowData(): string {
    const tomorrow = addDays(new Date(), 1);

    return format(tomorrow, 'yyyy-MM-dd');
  }
}
