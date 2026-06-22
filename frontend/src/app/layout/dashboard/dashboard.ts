import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFolderComponent } from '../../features/upload-folder/upload-folder';
import { FileExplorerComponent } from '../../features/file-explorer/file-explorer';
import { LivePreviewComponent } from '../../features/live-preview/live-preview';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UploadFolderComponent,
    FileExplorerComponent,
    LivePreviewComponent
  ],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {}