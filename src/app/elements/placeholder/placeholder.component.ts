import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})

//adding @Input in v.110 (connected with Semantic ui css library)
//lines refer to created Times directive and sets number of lines of paragraph (in placeholder.component.html)
//number of lines can be set as well in elements-home.component.html
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;

  constructor() {}

  ngOnInit(): void {}
}
