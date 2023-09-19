import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  constructor() { }

  @Input()
  gameType: string = 'Digital PS4'
  @Input()
  gamePrice: string = 'RS 129,90'

  ngOnInit(): void {
  }

}
