import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './sample-page.component.html',
  styleUrl: './sample-page.component.scss'
})
export class SamplePageComponent {

}
