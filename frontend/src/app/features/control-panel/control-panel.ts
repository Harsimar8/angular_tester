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
  clickInfo: any = null;
  hoverInfo: any = null;

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
        this.values = { ...values }
      });

    this.controlService.clickInfo$
      .subscribe(info => {
        this.clickInfo = info;
      });

    this.controlService.hoverInfo$
      .subscribe(info => {
        this.hoverInfo = info;
      });

  }

  onValueChange(tag: string, event: any) {
    const value = event.target.value;
    this.controlService.updateValue(tag, value);
  }
}