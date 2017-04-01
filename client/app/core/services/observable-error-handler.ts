import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ErrorSubject } from './error-subject';

@Injectable()
export class ObservableErrorHandler implements ErrorHandler {
  constructor(private subject: ErrorSubject) {
  }

  handleError(error) {
    if (error) {
      this.subject.next(error);
    }
  }
}
