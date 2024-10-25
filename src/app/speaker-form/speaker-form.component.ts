import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-speaker-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './speaker-form.component.html',
  styleUrl: './speaker-form.component.scss',
})
export class SpeakerFormComponent {
  speakerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    topic: new FormControl('', Validators.required),
    presentationFormat: new FormControl('online', Validators.required),
    description: new FormControl('',Validators.required),
    tosConsent: new FormControl('', Validators.required),
  });
 
  handleSubmit(): void {
    if (!this.speakerForm.valid) {
      console.log(this.speakerForm, this.speakerForm.valid)
      alert('Wypełnij wszystkie pola!');
      return;
    }
    const formData: any = this.speakerForm.value;
    const speakerForms: any = JSON.parse(
      localStorage.getItem('speakerForms') || '[]'
    );
    speakerForms.push(formData);
    localStorage.setItem('speakerForms', JSON.stringify(speakerForms));
    alert('Dziękujemy za wypełnienie formularza!');
  }
}
