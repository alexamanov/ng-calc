import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Item } from 'src/shared/models/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	@Input() item: Item;
	@Output() formSubmit: EventEmitter<Item> = new EventEmitter<Item>();

	isNew: boolean;

	constructor() { }

	ngOnInit() {
		if(this.item) {
			this.isNew = false;
		} else {
			this.isNew = true;
			this.item = new Item('', null);
		}
 	}

	onSubmit(form: NgForm) {
  		this.formSubmit.emit(form.value);
  		form.reset();
	}

}
