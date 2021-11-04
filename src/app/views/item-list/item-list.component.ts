import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

//items should be passed here down from parent component
export class ItemListComponent implements OnInit {
  @Input() items: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
