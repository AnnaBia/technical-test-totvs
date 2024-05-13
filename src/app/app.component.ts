import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public selectOptions = [
		{ value: 'M', label: 'Men' },
		{ value: 'W', label: 'Women' }
	];

	public selectControl = new FormControl();

	public constructor() { }

	public handleButtonClick() {
		alert('Button clicked!');
	}
}
