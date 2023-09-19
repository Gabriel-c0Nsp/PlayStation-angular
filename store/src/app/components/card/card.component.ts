import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // main card
  @Input()
  gameCover: string = ''

  // card offer label
  @Input()
  offerStatus: string  = ''

  // card price
  @Input()
  gameType: string = 'XPTO | PS4'
  @Input()
  gamePrice: string = 'RS 129,90'

  constructor() { }

  ngOnInit(): void {
  }

}
