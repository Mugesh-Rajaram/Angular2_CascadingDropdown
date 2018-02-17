import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustomPipeComponent implements PipeTransform {

  constructor() { }

  transform(value: any, gender: string) {
    if (gender.toUpperCase() === 'MALE') {
      return `Mr. ${value}`;
    } else {
      return `Miss. ${value}`;
    }
  }
}
