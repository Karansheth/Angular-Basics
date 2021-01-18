import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  finalString : string = "This is the app component. I received a string 'Neo' from the hello component and I capitalize it here NEO"
  @Input() getParentString : string;
  @Output() childString = new EventEmitter<string>();

  sendChildString(data)
  {
      this.childString.emit(data);
  }

}
