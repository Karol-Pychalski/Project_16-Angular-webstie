//Shared and Divider created in vid. 113

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
})
export class DividerComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
