import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../core/services/upload';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.html',
  styleUrls: ['./file-explorer.css']
})
export class FileExplorerComponent {

  htmlFiles: any[] = [];
  selectedFile: any = null;

  constructor(
    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.uploadService.files$.subscribe(files => {
      this.htmlFiles = files.filter(f =>
        f.name?.toLowerCase().endsWith('.html')
      );
      if (this.htmlFiles.length > 0 && !this.selectedFile) {
        this.openFile(this.htmlFiles[0]);
      }
    });
  }

  openFile(file: any) {
    if (!file?.content) return;
    this.selectedFile = file;
    this.uploadService.selectFile(file);
  }
}
