import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxChar: number = 100): string {
    if(value.length < maxChar) {
      return value;
    } else {
      return value.substr(0, maxChar) + '...';
    }
  }

}
