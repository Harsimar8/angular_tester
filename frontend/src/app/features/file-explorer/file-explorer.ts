import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadService, UploadedFile } from '../../core/services/upload';
import { PreviewService } from '../../core/services/preview';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.html'
})
export class FileExplorerComponent {

  htmlFiles: UploadedFile[] = [];

  constructor(
    private uploadService: UploadService,
    private previewService: PreviewService
  ) {

    console.log("FILE EXPLORER LOADED");
    this.uploadService.files$
      .subscribe((files: UploadedFile[]) => {


      console.log("RECEIVED IN FILE EXPLORER:", files);
        console.log("FILES FROM SERVICE:", files); // DEBUG

        this.htmlFiles = files.filter(f =>
          f.name?.endsWith('.html')
        );
      });
  }

  openFile(file: UploadedFile): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.previewService.setHtml(reader.result as string);
    };

    reader.readAsText(file.file);
  }
}