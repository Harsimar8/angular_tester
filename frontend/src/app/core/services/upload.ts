import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UploadedFile {
  name: string;
  file: File;
}

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private filesSubject = new BehaviorSubject<UploadedFile[]>([]);

  files$ = this.filesSubject.asObservable();

  setFiles(files: UploadedFile[]) {
    this.filesSubject.next(files);
  }

  getFiles() {
    return this.filesSubject.value;
  }
}