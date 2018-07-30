import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: any[], recherche: string, attributFiltre: string): any[] {
    return recherche === undefined ? value : value.filter(
      el => el[attributFiltre].toLocaleLowerCase().includes(recherche.trim().toLocaleLowerCase())
    );
  }

}
