import { Pipe, PipeTransform } from '@angular/core';

import { HeroRole } from './hero';

@Pipe({
  name: 'heroRole'
})
export class HeroRolePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return HeroRole[value];
  }
}
