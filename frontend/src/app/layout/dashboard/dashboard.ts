import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFolderComponent } from '../../features/upload-folder/upload-folder';
import { FileExplorerComponent } from '../../features/file-explorer/file-explorer';
// import { LivePreviewComponent } from '../../features/live-preview/live-preview';
import { ControlPanel } from '../../features/control-panel/control-panel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UploadFolderComponent,
    FileExplorerComponent,
    ControlPanel
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {}