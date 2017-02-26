import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  scrollTo(x: number, y: number) {
    window.scrollTo(x, y);
  }
}
