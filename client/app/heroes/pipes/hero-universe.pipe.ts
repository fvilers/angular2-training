import { Pipe, PipeTransform } from '@angular/core';

import { HeroUniverse } from '../models';

@Pipe({
  name: 'heroUniverse'
})
export class HeroUniversePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return HeroUniverse[value];
  }
}
