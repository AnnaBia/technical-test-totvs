import { NgClass, NgFor } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Option {
	value: string;
	label: string;
}

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	standalone: true,
	imports: [NgClass, NgFor, FormsModule],
	providers: [
		{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true }
	]
})
export class SelectComponent implements ControlValueAccessor {
	@Input() public options: Array<Option> = [];
	@Input() public disabled?: boolean = false;

	public value: string = null;
	public onChange: (value: string) => void;
	public onTouched: () => void;

	public writeValue(value: string): void {
		this.value = value;
	}

	public registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public onChangeSelect(value: any): void {
		this.value = value;
		this.onChange(value);
		this.onTouched();
	}
}
