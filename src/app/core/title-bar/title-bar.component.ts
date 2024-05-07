import { Component } from '@angular/core';
//Modules Import;
import { MatIconModule } from '@angular/material/icon';
import { TauriService } from '../tauri';

@Component({
  selector: 'ng-title-bar',
  standalone: true,
  imports: [
    //Modules
    MatIconModule
  ],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {

  icon_close = "close";
  icon_maximize: "filter_none" | "square" = "filter_none";
  icon_minimize = "minimize"

  constructor(private tauriService: TauriService) {}

  handleWindow(action: "Close" | "Maximize" | "Minimize" ) {
    this.tauriService.invoke("handle_window", { action }).then(handle_window_response => {
      if(handle_window_response == "none") return;
      this.icon_maximize = handle_window_response;
    })
  }
}
