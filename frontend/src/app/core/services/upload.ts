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

  setFiles(files: UploadedFile[]) {

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(files)
    );

    this.filesSubject.next(files);
  }

  getFiles() {
    return this.filesSubject.value;
  }

  private loadFromStorage(): UploadedFile[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}