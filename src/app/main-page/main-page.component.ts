import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/models/item';
import { updateEvent } from '../list/list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

	items: Item[] = new Array<Item>();
	total: number = 0;

	constructor() { }

	ngOnInit() {
	}
	add(item: Item) {
		this.items.push(item);
		this.total += item.amount;
	}

	deleteItem(item: Item) {
		let index = this.items.indexOf(item);
		this.items.splice(index, 1);
		this.total -= item.amount;
	}

	update(event: updateEvent) {
		this.items[this.items.indexOf(event.old)] = event.new;

		this.total -= event.old.amount;
		this.total += event.new.amount;
	}

}
