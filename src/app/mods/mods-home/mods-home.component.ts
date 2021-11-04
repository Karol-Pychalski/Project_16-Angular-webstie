import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'How can I contact you?', content: 'To reach us by phone or email go to Contact tab.'},
    { title: 'How can I return an item?', content: 'To return an item go to Return Policy at bottom of the page.'},
    { title: 'How long delivery will take?', content: 'In 3 business days you will get your order.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
