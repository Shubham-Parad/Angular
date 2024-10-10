import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ChildComponent } from './child/child.component';
import { GettersetterComponent } from './gettersetter/gettersetter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponent, ThirdComponent, ChildComponent, GettersetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Masstech Business Solutions.';
  name = 'John';
  getData: any;
  public checkfn:boolean=true;
}
