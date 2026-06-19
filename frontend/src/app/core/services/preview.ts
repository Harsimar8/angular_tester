import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  private htmlSubject = new BehaviorSubject<string>('');

  html$ = this.htmlSubject.asObservable();

  setHtml(html: string) {
    this.htmlSubject.next(html);
  }

}