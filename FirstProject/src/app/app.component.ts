import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponent,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Masstech Business Solutions.';
}
