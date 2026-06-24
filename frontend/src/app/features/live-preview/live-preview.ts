import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../core/services/upload';
import { ControlService } from '../../core/services/control';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-preview.html',
  styleUrls: ['./live-preview.css']
})
export class LivePreviewComponent implements AfterViewInit {

  @ViewChild('previewFrame') previewFrame!: ElementRef<HTMLIFrameElement>;

  htmlContent: string = '';

  constructor(
    private uploadService: UploadService,
    private controlService: ControlService
  ) {}

  ngAfterViewInit() {
    this.uploadService.selectedFile$.subscribe(file => {
      if (file?.content) {
        this.htmlContent = file.content;
        setTimeout(() => this.setupIframeListeners(), 100);
      }
    });

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (data?.type === 'svg-control-change') {
        this.controlService.updateValue(data.id, data.value);
      }
    });
  }

  private setupIframeListeners() {
    const iframe = this.previewFrame?.nativeElement;
    if (!iframe) return;

    const onLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;

        doc.addEventListener('mouseover', (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const info = {
            tagName: target.tagName.toLowerCase(),
            id: target.id || '',
            className: target.className || '',
            attributes: this.getElementAttributes(target),
            style: { cssText: (target as HTMLElement).style?.cssText || '' }
          };
          this.controlService.updateHoverInfo(info);
        }, true);

        doc.addEventListener('mouseleave', () => {
          this.controlService.updateHoverInfo(null);
        }, true);

        doc.addEventListener('click', (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const info = {
            tagName: target.tagName.toLowerCase(),
            id: target.id || '',
            className: target.className || '',
            attributes: this.getElementAttributes(target),
            style: { cssText: (target as HTMLElement).style?.cssText || '' }
          };
          this.controlService.updateClickInfo(info);
        }, true);

      } catch (err) {
        console.warn('Cannot access iframe content:', err);
      }
    };

    if (iframe.contentDocument?.readyState === 'complete') {
      onLoad();
    } else {
      iframe.addEventListener('load', onLoad);
    }
  }

  private getElementAttributes(element: HTMLElement): { name: string; value: string }[] {
    const attrs: { name: string; value: string }[] = [];
    if (!element || !element.attributes) return attrs;
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      attrs.push({ name: attr.name, value: attr.value });
    }
    return attrs;
  }
}
