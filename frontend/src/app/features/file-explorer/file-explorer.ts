import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UploadService } from '../../core/services/upload';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.html'
})
export class FileExplorerComponent {

  htmlFiles: any[] = [];
  selectedHtml: SafeHtml = '';

  constructor(
    private uploadService: UploadService,
    private sanitizer: DomSanitizer
  ) {

    this.uploadService.files$.subscribe(files => {
      this.htmlFiles = files.filter(f =>
        f.name?.toLowerCase().endsWith('.html')
      );
    });
  }

  openFile(file: any) {
    console.log("CLICKED FILE:", file);

    if (!file?.content) return;

    this.selectedHtml =
      this.sanitizer.bypassSecurityTrustHtml(file.content);
  }
}