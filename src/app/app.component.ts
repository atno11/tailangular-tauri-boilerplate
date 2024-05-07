import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TauriService } from './core/tauri';
import { TitleBarComponent } from './core/title-bar/title-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tauri-boilerplate';

  constructor(private tauriService: TauriService){}

  isTauri = this.tauriService.isTauri;

}
