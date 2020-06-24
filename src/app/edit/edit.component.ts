import { Component, OnInit, Inject } from '@angular/core';
import { Item } from 'src/shared/models/item';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	constructor(
		public dialog: MatDialogRef<EditComponent>,
		@Inject(MAT_DIALOG_DATA) public item: Item
	) { }

	ngOnInit() {
	}

	onSubmitted(item: Item) {
		this.dialog.close(item);
	}

}
