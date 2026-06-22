import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private controlsSubject =
    new BehaviorSubject<any[]>([]);

  controls$ =
    this.controlsSubject.asObservable();

  setControls(controls: any[]) {
    this.controlsSubject.next(controls);
  }

}