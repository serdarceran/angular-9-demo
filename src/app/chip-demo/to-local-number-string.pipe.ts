import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocalNumberString'
})
export class ToLocalNumberStringPipe implements PipeTransform {

 transform(v: string | number, args?: any): any {
    let n: number;
    if (typeof v === "number") {
      n = v;
    } else if (typeof v === 'string') {
      n = +v.replace(",", ".");
    }
    return n.toLocaleString("de");
  }

}