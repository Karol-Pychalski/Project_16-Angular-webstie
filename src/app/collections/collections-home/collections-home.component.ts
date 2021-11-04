import { createHostListener } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})

//created in vid.120:
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'designer', employed: true},
    { name: 'Bob', age: 29, job: 'cashier', employed: false},
    { name: 'Mary', age: 32, job: 'creator', employed: true}
  ];
  headers = [
    { key: 'employed', label: 'Employed'},
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
