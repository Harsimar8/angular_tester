import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService, UploadedFile } from '../../core/services/upload';

@Component({
  selector: 'app-upload-folder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-folder.html'
})
export class UploadFolderComponent {

  constructor(private uploadService: UploadService) {}

  onFolderSelected(event: any) {

  const files: any[] = [];

  for (let file of event.target.files) {
    files.push({
      name: file.name,
      file: file
    });
  }

  // ✅ ADD HERE
  console.log("UPLOAD TRIGGERED");
  console.log(files);

  this.uploadService.setFiles(files);
}
}