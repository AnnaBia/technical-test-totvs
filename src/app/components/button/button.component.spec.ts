import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
	let component: ButtonComponent;
	let fixture: ComponentFixture<ButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ButtonComponent] }).compileComponents();

		fixture = TestBed.createComponent(ButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
    expect(component).toBeTruthy();
  });
	
	it('should display the default properties button', () => {
		component.danger = false;
		fixture.detectChanges();
		const button = fixture.debugElement.query(By.css('button')).nativeElement;
	
		expect(button.classList).toContain(component.variant);
		expect(button.classList).toContain(component.size);
		expect(button.classList).not.toContain('danger');
		expect(button.disabled).toBe(false);
	});

	it('should disable button when disabled input is true', () => {
		component.disabled = true;
		fixture.detectChanges();
		const button = fixture.debugElement.query(By.css('button')).nativeElement;

		expect(button.disabled).toBe(true);
	});

	it('should emit onClick event when button is clicked', () => {
		spyOn(component.onClick, 'emit');
		fixture.detectChanges();
		const button = fixture.debugElement.query(By.css('button')).nativeElement;
		button.click();

		expect(component.onClick.emit).toHaveBeenCalled();
	});
});
