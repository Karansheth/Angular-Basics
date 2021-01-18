import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  initialParentString = "This is the hello component. I received a string 'Angular' from the app component. Click me to see the effect";

  label : string;

  getParentString(event)
  {
      this.label = event;
  }
}
