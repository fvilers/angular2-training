import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorSubject {
  private subject = new Subject<any>();

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  next(error: any) {
    this.subject.next(error);
  }
}
