import { Pipe, PipeTransform } from '@angular/core';
import { Regions } from './models/regions.model';

@Pipe({
  name: 'regionsFilter'
})
export class RegionsFilterPipe implements PipeTransform {

  transform(list: Regions[], value: string) {
    return value ? list.filter(item => item.regionName === value) : list;
  }

}
