import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlService } from '../../core/services/control';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-panel.html'
})
export class ControlPanel {

  Object = Object;
  controls: any[] = [];
  values: Record<string, any> = {};

  constructor(
    private controlService: ControlService,
    private cd: ChangeDetectorRef
  ) {

    this.controlService.controls$
      .subscribe(data => {
        this.controls = data || [];
      });

    this.controlService.values$
      .subscribe(values => {

        console.log("🔥 UI RECEIVED:", values);

        this.values = structuredClone(values); // IMPORTANT
        this.cd.detectChanges(); // 🔥 FORCE UI REFRESH

      });

  }
}