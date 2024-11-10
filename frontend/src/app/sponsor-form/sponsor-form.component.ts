import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface SponsorFormData {
  companyName: string;
  email: string;
  promotionType: string;
  promotionTime: number;
  description: string;
  tosConsent: boolean;
}

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

  constructor(private http: HttpClient) {}

  handleSubmit(): void {
    if (!this.sponsorForm.valid) {
      alert('Wypełnij/zaznacz poprawnie wszystkie wymagane pola!');
      return;
    }
    const formData: any = this.sponsorForm.value;
    formData.type = 'sponsor';
    this.http.post('http://localhost:3000/submit-form', formData).subscribe((res: any) => {
      if (res.result) {
        alert('Dziękujemy za wypełnienie formularza!');
      } else {
        alert('Wystąpił błąd');
      }
    });
  }
}
