import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from 'src/shared/models/item';
import { MatDialog } from '@angular/material';

import { EditComponent } from '../edit/edit.component';

export interface updateEvent {
	old: Item;
	new: Item;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

	@Input() items: Item[];
	@Output() delete: EventEmitter<Item> = new EventEmitter<Item>();
	@Output() update: EventEmitter<updateEvent> = new EventEmitter<updateEvent>();

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}

	onDelete(item: Item) {
		this.delete.emit(item);
	}

	onCardClicked(item: Item) {

		const dialog = this.dialog.open(EditComponent, {
			data: item
		});

		dialog.afterClosed().subscribe(result => {
			if(result) {
				this.update.emit({
					old: item,
					new: result
				});
			}
		});

	}

}
