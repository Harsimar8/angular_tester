import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlService } from '../../core/services/control';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-panel.html',
  styleUrl: './control-panel.css'
})
export class ControlPanel {

  controls: any[] = [];

  constructor(private controlService: ControlService) {

    console.log("CONTROL PANEL COMPONENT CREATED");

    this.controlService.controls$
      .subscribe(data => {

        console.log("🔥 SERVICE DATA RECEIVED:", data);

        this.controls = data ? [...data] : [];

        console.log("🔥 UI UPDATED DATA:", this.controls);

      });
  }
}