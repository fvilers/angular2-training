import { Injectable } from '@angular/core';

@Injectable()
export class DocumentService {
  querySelector(selectors: string) {
    return document.querySelector(selectors);
  }
}
