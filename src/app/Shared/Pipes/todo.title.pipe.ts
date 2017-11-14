import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(input_value: string, trancate_after: number): string|null {
    if (input_value && typeof input_value === 'string') {
      const ValuesArray = input_value.split(' ');
      let transformed_string = '';
      // tslint:disable-next-line:forin
      for (const value in ValuesArray) {
        const firstCharacter = ValuesArray[value].substring(0, 1).toUpperCase();
        const rest = ValuesArray[value].substring(1, ValuesArray[value].length);
        transformed_string += ' ' + firstCharacter + rest;
      }

      if (transformed_string.length >= trancate_after) {
        transformed_string = transformed_string.substring(0, trancate_after);
        transformed_string += '...';
      }

      return transformed_string;
    } else {
      return null;
    }
  }
}
