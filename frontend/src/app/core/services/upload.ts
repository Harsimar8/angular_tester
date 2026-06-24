import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UploadedFile {
  name: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private STORAGE_KEY = 'uploaded_files';

  private filesSubject = new BehaviorSubject<UploadedFile[]>(
    this.loadFromStorage()
  );

  files$ = this.filesSubject.asObservable();

  setFiles(newFiles: UploadedFile[]) {

  const currentFiles = this.filesSubject.value;

  const updatedFiles = [...currentFiles, ...newFiles];

  localStorage.setItem(
    this.STORAGE_KEY,
    JSON.stringify(updatedFiles)
  );

  this.filesSubject.next(updatedFiles);
}

  getFiles() {
    return this.filesSubject.value;
  }

  private loadFromStorage(): UploadedFile[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private selectedFileSubject = new BehaviorSubject<UploadedFile | null>(null);
  selectedFile$ = this.selectedFileSubject.asObservable();

  selectFile(file: UploadedFile) {
    this.selectedFileSubject.next(file);
  }
}