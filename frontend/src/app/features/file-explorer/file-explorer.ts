// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import { UploadService } from '../../core/services/upload';
// import { ControlService } from '../../core/services/control';

// @Component({
//   selector: 'app-file-explorer',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './file-explorer.html'
// })
// export class FileExplorerComponent {

//   htmlFiles: any[] = [];
//   selectedHtml: SafeHtml = '';

//   constructor(
//     private uploadService: UploadService,
//     private sanitizer: DomSanitizer,
//     private controlService: ControlService
//   ) {

//     this.uploadService.files$.subscribe(files => {
//       this.htmlFiles = files.filter(f =>
//         f.name?.toLowerCase().endsWith('.html')
//       );
//     });
//   }

//    openFile(file: any) {

//   if (!file?.content) return;

//   // 1. Preview HTML
//   this.selectedHtml =
//     this.sanitizer.bypassSecurityTrustHtml(file.content);

//   // 2. Parse HTML
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(file.content, 'text/html');

//   // 3. Extract controls from HTML/SVG
//   const nodes = doc.querySelectorAll('[data-tag]');

//   const controls = Array.from(nodes).map(node => {

//   return {
//     tag: node.getAttribute('data-tag'),
//     type: node.getAttribute('data-type'),
//     min: node.getAttribute('data-min'),
//     max: node.getAttribute('data-max'),
//     step: node.getAttribute('data-step'),
//     default: node.getAttribute('data-default')
//   };

// });

//   // 4. Send to control panel
//   this.controlService.setControls(controls);

//   console.log("EXTRACTED CONTROLS:", controls);
// }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { UploadService } from '../../core/services/upload';
import { ControlService } from '../../core/services/control';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-explorer.html'
})
export class FileExplorerComponent implements OnInit {

  htmlFiles: any[] = [];
  selectedHtml: SafeHtml = '';

  constructor(
    private uploadService: UploadService,
    private sanitizer: DomSanitizer,
    private controlService: ControlService
  ) {}

  ngOnInit() {

    this.uploadService.files$.subscribe(files => {

      this.htmlFiles = files.filter(f =>
        f.name?.toLowerCase().endsWith('.html')
      );

      console.log("FILES LOADED:", this.htmlFiles);

      // 🔥 AUTO LOAD FIRST FILE (FIX FOR REFRESH ISSUE)
      if (this.htmlFiles.length > 0) {
        this.openFile(this.htmlFiles[0]);
      }

    });
  }

  openFile(file: any) {

    if (!file?.content) return;

    // 1. Preview HTML
    this.selectedHtml =
      this.sanitizer.bypassSecurityTrustHtml(file.content);

    // 2. Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(file.content, 'text/html');

    // 3. Extract controls safely
    const nodes = doc.querySelectorAll('[data-tag]');

    const controls = Array.from(nodes).map(node => ({

      tag: node.getAttribute('data-tag') || '',
      type: node.getAttribute('data-type') || '',
      min: node.getAttribute('data-min') || '',
      max: node.getAttribute('data-max') || '',
      step: node.getAttribute('data-step') || '',
      default: node.getAttribute('data-default') || ''

    }));

    console.log("EXTRACTED CONTROLS:", controls);

    // 4. Send to service
    this.controlService.setControls(controls);

  }
}