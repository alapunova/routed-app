import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  // declare data models for this component
  // if we intend to inject values, the data model MUST be an @Input
  @Input() price:number = 0
  @Input() code:string = ''
  count:number = 0

  // declare a custom event for this component
  @Output() sortie:EventEmitter<number> = new EventEmitter()
  @Output() reset:EventEmitter<number> = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  // here are the methods of this component
  buyStock(){
    // increment the count
    this.count += 1
    // emit a custom event to the parent component
    // we can send complex data as an object
    this.sortie.emit(this.price)
  }

  sellStock(){
    // decrement the count
    if (this.count>0){
      this.count -= 1
      this.sortie.emit(-this.price)
    }
  }

  resetStock(){
    //sets quantity to 0
    this.count = 0
    this.reset.emit(this.price)
  }
}
