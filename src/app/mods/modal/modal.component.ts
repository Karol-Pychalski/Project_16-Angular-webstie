//ElementRef added in vid.139 - gives access to host element of this component
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement);
  }

  //ngOnInit -one of live cycle hook methods, gives access to data provided by parent component (constructor doesn't)
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  //added in vid.143
  onCloseClick() {
    this.close.emit();
  }

}
