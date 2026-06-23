import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlService } from './core/services/control';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('frontend');

  private controlService = inject(ControlService);

  ngOnInit() {

    console.log("🔥 APP INIT LOADED");

    window.addEventListener("message", (event) => {

      const data = event.data;

      if (!data?.tag) return;

      console.log("🔥 SVG CLICK RECEIVED:", data);

      this.controlService.updateValue(data.tag, data.value);

    });

  }
}