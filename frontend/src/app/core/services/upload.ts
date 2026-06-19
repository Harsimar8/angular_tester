import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProjectFile } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private filesSubject = new BehaviorSubject<ProjectFile[]>([]);

  files$ = this.filesSubject.asObservable();

  setFiles(files: ProjectFile[]) {
    this.filesSubject.next(files);
  }

  getFiles() {
    return this.filesSubject.value;
  }

}