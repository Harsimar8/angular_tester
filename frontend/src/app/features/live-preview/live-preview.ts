import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { PreviewService } from '../../core/services/preview.service';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  templateUrl: './live-preview.component.html'
})
export class LivePreviewComponent
implements AfterViewInit {

  @ViewChild('frame')
  frame!: ElementRef<HTMLIFrameElement>;

  constructor(
    private previewService: PreviewService
  ) {}

  ngAfterViewInit() {

    this.previewService.html$
      .subscribe(html => {

        if (!this.frame) return;

        this.frame.nativeElement.srcdoc =
          html;

      });
  }
}