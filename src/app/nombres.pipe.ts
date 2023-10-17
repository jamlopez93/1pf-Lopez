import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombres',
})
export class NombresPipe implements PipeTransform {
  transform(value: string, apellido: string): string {
    return value + ' ' + apellido;
  }
}
