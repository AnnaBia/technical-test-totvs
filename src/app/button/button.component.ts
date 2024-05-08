import { PoCheckboxGroupOption, PoRadioGroupOption, PoNotificationService, PoToasterOrientation } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	public buttonTypeOptions: Array<PoRadioGroupOption> = [
		{ label: 'Primary', value: 'primary' },
		{ label: 'Secondary', value: 'secondary' },
		{ label: 'Tertiary', value: 'tertiary' }
	]
	public buttonPropertiesOptions: Array<PoCheckboxGroupOption> = [
		{ label: 'Disabled', value: 'disabled' },
		{ label: 'Danger', value: 'danger' }
	]
	public buttonSizeOptions: Array<PoRadioGroupOption> = [
		{ label: 'Medium', value: 'medium' },
		{ label: 'Large', value: 'large' }
	]
	public typeButton: string;
	public propertiesButton: Array<string>;
	public sizeButton: string;
	
	private poNotification: PoNotificationService;

	public constructor(poNotification: PoNotificationService) {
		this.poNotification = poNotification;
	}

	public ngOnInit(): void {
		this.restore();
	}

	public changeButtonProperties(properties: Array<string>): void {
		this.buttonTypeOptions[0] = { ...this.buttonTypeOptions[0], disabled: false };
		this.buttonTypeOptions[1] = { ...this.buttonTypeOptions[1], disabled: false };
		this.buttonTypeOptions[2] = { ...this.buttonTypeOptions[2], disabled: false };

		if (properties) {
			properties.forEach((property: string) => {
				if (property === 'danger' && this.propertiesButton.includes('danger')) {
					this.buttonTypeOptions[2] = { ...this.buttonTypeOptions[2], disabled: true };
				}
			});
		}
	}

	public verifyTertiaryButton(typeButton: string): void {
		const buttonPropertiesOptions = [...this.buttonPropertiesOptions];

		if (typeButton === 'tertiary') {
			buttonPropertiesOptions[2] = { label: 'Danger', value: 'danger', disabled: true };
			this.buttonPropertiesOptions = buttonPropertiesOptions;
		} else {
			buttonPropertiesOptions[2] = { label: 'Danger', value: 'danger', disabled: false };
			this.buttonPropertiesOptions = buttonPropertiesOptions;
		}
	}

	public alertButtonClick(): void {
		this.poNotification.success({ message: 'My button clicked!', duration: 1000, orientation: PoToasterOrientation.Top });
	}

	public restore(): void {
		this.typeButton = 'primary';
		this.propertiesButton = [];
		this.sizeButton = 'medium';
		this.changeButtonProperties(this.propertiesButton);
	}
}
