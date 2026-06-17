import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emogi',
  standalone: true
})
export class Emogipipe implements PipeTransform {

  transform(tipo: string): string {
    if(tipo == "Marvel"){
      return '🔴';
    }
    if(tipo == "DC"){
      return '🔵';
    }

    return '⚫️';
  }
}
