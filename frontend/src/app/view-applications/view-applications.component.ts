import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-applications.component.html',
  styleUrl: './view-applications.component.scss',
})
export class ViewApplicationsComponent {
  participantForms: any[] = [];
  speakerForms: any[] = [];
  sponsorForms: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http
      .get('http://localhost:3000/submitted-forms')
      .subscribe((res: any) => {
        if (res.result) {
          this.participantForms = res.message.participants; 
          this.speakerForms = res.message.speakers; 
          this.sponsorForms = res.message.sponsors; 
        } else {
          alert('Wystąpił błąd');
        }
      });
  }
}
