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

    console.log("🔥 UPDATE CALLED:", tag, value);

    const current = { ...this.valuesSubject.value };

    // ⚠️ ALWAYS use string key safely
    current[String(tag)] = value;

    this.valuesSubject.next(current);

    console.log("🔥 NEW STATE:", current);
  }

  // ========================
  // CLICK INFO
  // ========================
  private clickInfoSubject = new BehaviorSubject<any>(null);
  clickInfo$ = this.clickInfoSubject.asObservable();

  updateClickInfo(info: any) {
    this.clickInfoSubject.next(info);
  }

  // ========================
  // HOVER INFO
  // ========================
  private hoverInfoSubject = new BehaviorSubject<any>(null);
  hoverInfo$ = this.hoverInfoSubject.asObservable();

  updateHoverInfo(info: any) {
    this.hoverInfoSubject.next(info);
  }

}