import { Component } from '@angular/core';
import { UploadService } from '../../core/services/upload.service';
import { ProjectFile } from '../../core/models/file.model';

@Component({
  selector: 'app-upload-folder',
  standalone: true,
  templateUrl: './upload-folder.component.html'
})
export class UploadFolderComponent {

  constructor(
    private uploadService: UploadService
  ) {}

  onFolderSelected(event: Event) {

    const input =
      event.target as HTMLInputElement;

    if (!input.files) return;

    const files = Array.from(input.files);

    const projectFiles: ProjectFile[] =
      files.map(file => ({
        name: file.name,
        path: (file as any).webkitRelativePath,
        file,
        type: file.name.split('.').pop() || ''
      }));

    this.uploadService.setFiles(projectFiles);

    console.log(projectFiles);
  }
}