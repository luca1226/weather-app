import { Pipe, PipeTransform } from '@angular/core';

/**
 * Print unix timestamp for date or time
 */
 @Pipe({
  name: 'unixTimestamp'
})
export class UnixTimestampPipe implements PipeTransform {
  transform(value: number, type: string = 'datetime'): string {
    switch (type) {
      case 'datetime':
        return new Date(value * 1000).toLocaleString();
      case 'time':
        return new Date(value * 1000).toLocaleTimeString();
      default:
        return new Date(value * 1000).toLocaleString();
    }
  }
}
