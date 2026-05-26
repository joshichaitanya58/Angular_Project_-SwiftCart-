import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrls: ['./reactive-form.css']
})
export class ReactiveForm {
  contactForm!: FormGroup;
  submittedMessage: string = '';
  isError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Form is valid
      console.log('Form Data:', this.contactForm.value);

      this.submittedMessage = "✅ Thank you! Your message has been sent successfully.";
      this.isError = false;

      // Reset the form after submission
      this.contactForm.reset();
    } else {
      // Mark all controls as touched to show validation errors
      this.contactForm.markAllAsTouched();

      this.submittedMessage = "⚠️ Please fill all required fields correctly.";
      this.isError = true;
    }
  }
}
