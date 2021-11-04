import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 300, label: '# of users'},
    { value: 1500, label: 'Profit'},
    { value: 270, label: 'Reviews'}
  ];
  items = [
    { image: '/assets/images/canon.jpg', title: 'Canon', description: 'This is a canon camera'},
    { image: '/assets/images/sony.jpg', title: 'Sony', description: 'This is a sony camera'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
