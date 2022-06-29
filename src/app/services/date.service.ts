import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  /**
   * Solution using Native Date instance
   */
  getTomorrowData(): string {
    const now = Date.now();

    const tomorrow = new Date(now + 24 * 60 * 60 * 1000);

    const date = tomorrow.getDate();
    const month = tomorrow.getMonth() + 1;
    const year = tomorrow.getFullYear();

    return `${year}-${this.getPaddedDigit(month)}-${this.getPaddedDigit(date)}`;
  }

  getPaddedDigit(value: number): string {
    return value >= 10 ? `${value}` : `0${value}`;
  }
}
