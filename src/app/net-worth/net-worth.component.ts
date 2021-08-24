import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  // declare model data for this component
  total = 0

  codes = [
    {code:'AMZN', price:42},
    {code:'NFLX', price:12},
    {code:'FB', price:142},
    {code:'GOOGL', price:82},
    {code:'AAPL', price:11},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // we can declare methods for this class here
  modifyParent(value:number){
    this.total += value
  }

  // here we handle a custom event from a child component
  handleSortie(value:number){
    this.total += value
  }

  // handle event after reset
  handleReset(value:number){
    this.total = value
  }
}
