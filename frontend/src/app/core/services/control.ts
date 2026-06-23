import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private controlsSubject = new BehaviorSubject<any[]>([]);

  controls$ = this.controlsSubject.asObservable();

  setControls(data: any[]) {
    console.log("SERVICE RECEIVED:", data);
    this.controlsSubject.next(data);
  }
}