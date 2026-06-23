import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  // ========================
  // STATIC CONTROLS
  // ========================
  private controlsSubject = new BehaviorSubject<any[]>([]);
  controls$ = this.controlsSubject.asObservable();

  setControls(data: any[]) {
    console.log("SERVICE RECEIVED:", data);
    this.controlsSubject.next(data);
  }

  // ========================
  // LIVE VALUES
  // ========================
  private valuesSubject = new BehaviorSubject<any>({});
  values$ = this.valuesSubject.asObservable();

  updateValue(tag: string, value: any) {
    const current = this.valuesSubject.value;

    this.valuesSubject.next({
      ...current,
      [tag]: value
    });

    console.log("🔥 LIVE VALUE:", tag, value);
  }

}