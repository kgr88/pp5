import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-applications',
  standalone: true,
  imports: [],
  templateUrl: './view-applications.component.html',
  styleUrl: './view-applications.component.scss'
})
export class ViewApplicationsComponent {
  participantForms: any[] = [];
  speakerForms: any[] = [];
  sponsorForms: any[] = [];

  ngOnInit() {
    this.participantForms = JSON.parse(localStorage.getItem('participantForms') || '[]');
    this.speakerForms = JSON.parse(localStorage.getItem('speakerForms') || '[]');
    this.sponsorForms = JSON.parse(localStorage.getItem('sponsorForms') || '[]');
  }
}
