import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

//data comes from views-component.html
//type :any added in v.133 due to error in statistics.component.html: Property value doesn't exist on type 'never' (by defalut below [] has type never)
export class StatisticsComponent implements OnInit {
  @Input() data: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
