import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gettersetter',
  standalone: true,
  imports: [],
  templateUrl: './gettersetter.component.html',
  styleUrl: './gettersetter.component.scss',
})
export class GettersetterComponent {
  private _mydata: boolean = true;
  public message: string = '';
  get mydata(): boolean {
    return this._mydata;
  }

  @Input()
  set mydata(val: boolean) {
    this._mydata = val;
    if (val == true) {
      this.message = 'You logged in';
    } else {
      this.message = 'You logged out';
    }
  }
}
