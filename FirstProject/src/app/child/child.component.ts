import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() idata: any;
  @Output() odata = new EventEmitter<any>();

  func() {
    this.odata.emit('Child data emitted');
  }
}
