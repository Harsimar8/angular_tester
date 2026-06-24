import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlService } from '../../core/services/control';

@Component({
  selector: 'app-control-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-list.html',
  styleUrl: './control-list.css',
})
export class ControlList {
  private controlService = inject(ControlService);

  hoverInfo: any = null;
  clickInfo: any = null;

  constructor() {
    this.controlService.hoverInfo$.subscribe(info => {
      this.hoverInfo = info;
    });
    this.controlService.clickInfo$.subscribe(info => {
      this.clickInfo = info;
    });
  }
}