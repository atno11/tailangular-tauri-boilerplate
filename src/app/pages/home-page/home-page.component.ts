import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule} from "@angular/material/card"
import { MatDividerModule } from '@angular/material/divider';
import { ThemeService } from '../../services/theme.service';
import { open } from '@tauri-apps/api/shell'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {


  changeTheme(){
    new ThemeService().selectTheme("pink");
  }

  openLink(url: string){
    open(url)
  }

}
