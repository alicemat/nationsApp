import { Pipe, PipeTransform } from '@angular/core';
import { Regions } from './models/regions.model';


@Pipe({
  name: 'yearFilter'
})
export class YearFilterPipe implements PipeTransform {

  transform(list: Regions[], filters: {minYear: number, maxYear:number}) {
    if(filters.minYear && filters.maxYear){
      return list.filter(item => item.year>=Number(filters.minYear) && item.year<=Number(filters.maxYear));
    }
    else if(filters.minYear){
      return list.filter(item => item.year>=Number(filters.minYear));
    }
    else if(filters.maxYear){
      return list.filter(item => item.year<=Number(filters.maxYear));
    }
    return list;
  }


}
