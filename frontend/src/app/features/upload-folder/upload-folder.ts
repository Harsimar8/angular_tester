import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../core/services/upload';

@Component({
  selector: 'app-upload-folder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-folder.html'
})
export class UploadFolderComponent {

  constructor(private uploadService: UploadService) {}

  async onFolderSelected(event: any) {

    const fileList: FileList = event.target.files;
    const files: any[] = [];

    for (let i = 0; i < fileList.length; i++) {

      const file = fileList.item(i);

      if (file) {

        const content = await file.text(); // IMPORTANT

        files.push({
          name: file.name,
          content: content
        });
      }
    }

    console.log("UPLOAD TRIGGERED", files);

    this.uploadService.setFiles(files);
  }
}