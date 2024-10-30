import { Routes } from '@angular/router';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { SpeakerFormComponent } from './speaker-form/speaker-form.component';
import { SponsorFormComponent } from './sponsor-form/sponsor-form.component';
import { HomeComponent } from './home/home.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: HomeComponent,
  },
  {
    path: 'uczestnicy',
    title: 'Formularz dla uczestników',
    component: ParticipantFormComponent,
  },
  {
    path: 'prelegenci',
    title: 'Formularz dla prelegentów',
    component: SpeakerFormComponent,
  },
  {
    path: 'sponsorzy',
    title: 'Formularz dla sponsorów',
    component: SponsorFormComponent,
  },
  {
    path: 'submitted',
    title: 'Zgłoszenia',
    component: ViewApplicationsComponent,
  },
];
