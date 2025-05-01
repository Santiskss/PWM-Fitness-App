import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  userName: string = '';
  userAge: number = 1;
  userSex: string = '';
  userWeight: number = 0;
  userHeight: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.userName = localStorage.getItem('userName') || 'Usuario';
      this.userAge = parseInt(localStorage.getItem('userAge') || '1');
      this.userSex = localStorage.getItem('userSex') || 'Prefiero no decirlo';
      this.userWeight = parseFloat(localStorage.getItem('userWeight') || '0');
      this.userHeight = parseFloat(localStorage.getItem('userHeight') || '0');
    }
  }


}
