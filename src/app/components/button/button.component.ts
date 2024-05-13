import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [NgClass],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() public variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
	@Input() public size: 'md' | 'lg' = 'md';
	@Input() public disabled: boolean = false;
	@Input() public danger: boolean = false;
	@Output() public onClick = new EventEmitter<void>();

	public handleClick(): void {
		if (!this.disabled) {
			this.onClick.emit();
		}
	}
}
