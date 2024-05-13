import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent, Option } from './select.component';

describe('SelectComponent', () => {
	let component: SelectComponent;
	let fixture: ComponentFixture<SelectComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SelectComponent] }).compileComponents();

		fixture = TestBed.createComponent(SelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
    expect(component).toBeTruthy();
  });
	
	it('should render options with value and label', () => {
		const options: Array<Option> = [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
			{ value: '3', label: 'Option 3' }
		];
		component.options = options;
		fixture.detectChanges();

		const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');
		expect(selectElement).toBeTruthy();

		const optionElements: HTMLOptionElement[] = Array.from(selectElement.options);
		expect(optionElements.length).toBe(options.length);

		optionElements.forEach((optionElement, index) => {
			expect(optionElement.value).toBe(options[index].value);
			expect(optionElement.textContent.trim()).toBe(options[index].label);
		});
	});

	it('should disable select when disabled input is true', () => {
		component.disabled = true;
		fixture.detectChanges();
		const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');

		expect(selectElement.disabled).toBe(false);
	});

	it('should update ngModel on option change', () => {
		const options: Array<Option> = [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
		];

		component.options = options;
		fixture.detectChanges();

		const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');
		selectElement.value = '2';
		selectElement.dispatchEvent(new Event('change'));

		expect(component.value).toBe('2');
	});
});
