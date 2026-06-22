import { Component } from '@angular/core';
import { PreviewService } from '../../core/services/preview';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  templateUrl: './live-preview.html'
})
export class LivePreviewComponent {

  html = '';

  constructor(private previewService: PreviewService) {
    this.previewService.html$.subscribe(html => {
      this.html = html;
    });
  }
}