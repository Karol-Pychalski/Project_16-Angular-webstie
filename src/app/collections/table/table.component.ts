import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

//pierwtna wersja jak w kursie powodowała błąd przypisania tabeli z collections-home.component.ts do typu never[] (prt 1)
//@Input() data=[];
//classNames in v.122

export class TableComponent implements OnInit {
  @Input() classNames='';
  @Input() data:any=[];
  @Input() headers: any=[];


  // @Input('class) classNames='';  - ('class') means we can pass from parent component a property with name class and it will be passed to className directly (it is to avoid mixing names class with export class itself)
  constructor() { }

  ngOnInit(): void {
  }

}
