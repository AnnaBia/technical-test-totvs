import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService, PoSelectOption, PoToasterOrientation } from '@po-ui/ng-components';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
	public disabledSelect: boolean;
	public formAddOption: FormGroup;
	public selectOptions: Array<PoSelectOption>;
	public selecteValue = new FormControl(null);

	private formBuilder: FormBuilder;
	private poNotification: PoNotificationService;

	public constructor(formBuilder: FormBuilder, poNotification: PoNotificationService) {
		this.formBuilder = formBuilder;
		this.poNotification = poNotification;
	}

	public ngOnInit(): void {
		this.createFormAddOption();
		this.restore();
	}

	public createFormAddOption(): void {
		this.formAddOption = this.formBuilder.group({
			label: ['', Validators.compose([Validators.required])],
			value: ['', Validators.compose([Validators.required])],
		})
	}

	public addOption(): void {
		this.selectOptions = [...this.selectOptions, this.formAddOption.value ];
		this.alertButtonClick();
		this.formAddOption.reset();
	}

	private alertButtonClick(): void {
		this.poNotification.success({ message: 'New option added!', duration: 1000, orientation: PoToasterOrientation.Top });
	}

	public restore(): void {
		this.disabledSelect = false;
		this.selectOptions = [];
		this.formAddOption.reset();
		this.selecteValue.setValue(null);
	}
}
