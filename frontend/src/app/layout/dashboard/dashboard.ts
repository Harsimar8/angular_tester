import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFolderComponent } from '../../features/upload-folder/upload-folder';
import { FileExplorerComponent } from '../../features/file-explorer/file-explorer';
import { LivePreviewComponent } from '../../features/live-preview/live-preview';
import { ControlList } from '../../features/control-list/control-list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UploadFolderComponent,
    FileExplorerComponent,
    LivePreviewComponent,
    ControlList
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {}
