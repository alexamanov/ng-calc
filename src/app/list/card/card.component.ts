import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'src/shared/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() item: Item;
	@Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
	@Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}

	onXButtonClick() {
		this.xButtonClick.emit();
	}

	onCardClick() {
		this.cardClick.emit();
	}

}
