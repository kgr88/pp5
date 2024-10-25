import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sponsor-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sponsor-form.component.html',
  styleUrl: './sponsor-form.component.scss',
})
export class SponsorFormComponent {
  sponsorForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    promotionType: new FormControl('', Validators.required),
    promotionTime: new FormControl('1', [Validators.required, Validators.min(1), Validators.max(3)]),
    description: new FormControl(''),
    tosConsent: new FormControl('', Validators.required),
  });

  handleSubmit() {
    if (!this.sponsorForm.valid) {
      console.log(this.sponsorForm, this.sponsorForm.valid);
      alert('Wypełnij poprawnie wszystkie pola!');
      return;
    }
    const formData = this.sponsorForm.value;
    const sponsorForm = JSON.parse(
      localStorage.getItem('sponsorForms') || '[]'
    );
    sponsorForm.push(formData);
    localStorage.setItem('sponsorForms', JSON.stringify(sponsorForm));
    alert('Dziękujemy za wypełnienie formularza!');
  }
}
