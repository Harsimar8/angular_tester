// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ControlService } from '../../core/services/control';

// @Component({
//   selector: 'app-control-panel',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './control-panel.html',
//   styleUrl: './control-panel.css'
// })

// export class ControlPanel {

//   controls: any[] = [];

//   constructor(private controlService: ControlService) {

//     this.controlService.controls$
//       .subscribe(data => {

//         console.log("🔥 CONTROL PANEL GOT DATA:", data);

//         this.controls = [...(data || [])]; // IMPORTANT COPY

//         console.log("🔥 ASSIGNED TO UI:", this.controls);

//       });
//   }
// }


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
 values: any = {};

  constructor(private controlService: ControlService) {

  this.controlService.controls$
    .subscribe(data => {
      console.log("CONTROLS IN UI:", data);
      this.controls = data || [];
    });

  this.controlService.values$
    .subscribe(values => {
      console.log("LIVE VALUES IN UI:", values);
      this.values = values || {};
    });

  // 🔥 NEW: restore if page reloads
 
}

  onValueChange(tag: string, event: any) {
    const value = event.target.value;
    this.controlService.updateValue(tag, value);
  }
}