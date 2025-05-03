import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {isPlatformBrowser} from '@angular/common';
import {UserService} from '../../../services/user.service';
import {Auth} from '@angular/fire/auth';

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
  userAge: number = 0;
  userEmail: string = '';
  userSex: string = '';
  userWeight: number = 0;
  userHeight: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private userService: UserService,
              private auth: Auth) {

  }

  async ngOnInit() {
    if(isPlatformBrowser(this.platformId)) {
      const user = this.auth.currentUser;
      if(user) {
        const profile = await this.userService.getUserProfile(user.uid);
        if(profile) {
          this.userName = profile['name'] || '';
          this.userEmail = profile['email'] || '';
          this.userAge = profile['edad'] || 0;
          this.userSex = profile['sexo'] || '';
          this.userWeight = profile['peso'] || 0;
          this.userHeight = profile['altura'] || 0;
        }
      }
    }
  }
}
