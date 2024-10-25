import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-applications',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './view-applications.component.html',
  styleUrl: './view-applications.component.scss',
})
export class ViewApplicationsComponent {
  participantForms: any[] = [];
  speakerForms: any[] = [];
  sponsorForms: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.participantForms = JSON.parse(
      localStorage.getItem('participantForms') || '[]'
    );
    this.speakerForms = JSON.parse(
      localStorage.getItem('speakerForms') || '[]'
    );
    this.sponsorForms = JSON.parse(
      localStorage.getItem('sponsorForms') || '[]'
    );
  }

  fetchForms(formType: 'participant' | 'speaker' | 'sponsor') {
    let apiUrl: string = '';
    let storageKey: string = '';

    switch (formType) {
      case 'participant':
        apiUrl = `https://api.mockaroo.com/api/4703ec90?count=1&key=e2aead50`;
        storageKey = 'participantForms';
        break;
      case 'speaker':
        apiUrl = `https://api.mockaroo.com/api/d1d0fa30?count=1&key=e2aead50`;
        storageKey = 'speakerForms';
        break;
      case 'sponsor':
        apiUrl = `https://api.mockaroo.com/api/ca4bc540?count=1&key=e2aead50`;
        storageKey = 'sponsorForms';
        break;
      default:
        console.error('Invalid form type');
        return;
    }

    this.http.get(apiUrl).subscribe((data: any) => {
      let forms = JSON.parse(localStorage.getItem(storageKey) || '[]');
      console.log(forms, data[0]);
      forms.push(data[0]);
      localStorage.setItem(storageKey, JSON.stringify(forms));
      this.ngOnInit();
    });
  }
}
