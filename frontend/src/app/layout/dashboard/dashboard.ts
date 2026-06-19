import { Component } from '@angular/core';

import { UploadFolderComponent }
from '../../features/upload-folder/upload-folder.component';

import { FileExplorerComponent }
from '../../features/file-explorer/file-explorer.component';

import { LivePreviewComponent }
from '../../features/live-preview/live-preview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UploadFolderComponent,
    FileExplorerComponent,
    LivePreviewComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {}