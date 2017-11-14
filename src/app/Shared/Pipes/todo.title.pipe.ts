import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): any {
    if(value && typeof value === 'string'){
      let values = value.split(' ');
      let valueClone  = value;
      let firstCharacter = valueClone.substring(0,1).toUpperCase();
      let rest = valueClone.substring(1, valueClone.length);
      return firstCharacter + rest;
    } else {
      return null;
    }
  }

}