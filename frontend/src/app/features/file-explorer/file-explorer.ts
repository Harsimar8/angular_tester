import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadService } from '../../core/services/upload.service';
import { PreviewService } from '../../core/services/preview.service';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.component.html'
})
export class FileExplorerComponent {

  htmlFiles: any[] = [];

  constructor(
    private uploadService: UploadService,
    private previewService: PreviewService
  ) {

    this.uploadService.files$
      .subscribe(files => {

        this.htmlFiles =
          files.filter(file =>
            file.name.endsWith('.html')
          );

      });
  }

  openFile(file: any) {

    const reader = new FileReader();

    reader.onload = () => {

      this.previewService.setHtml(
        reader.result as string
      );

    };

    reader.readAsText(file.file);
  }
}