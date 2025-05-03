import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {isPlatformBrowser} from '@angular/common';
import {UserService} from '../../../services/user.service';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userName: string = '';
  userAge: number = 0;
  userEmail: string = '';
  userSex: string = '';
  userWeight: number = 0;
  userHeight: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private userService: UserService,
              private auth: Auth,
              private router: Router) {

  }

  async ngOnInit() {
    onAuthStateChanged(this.userService['auth'], async (user) => {
      if(!user){
        this.router.navigate(['/login']);
        return;
      }
        const profile = await this.userService.getUserProfile(user.uid);
        if (profile) {
          this.userName = profile['name'] || 'No indicado';
          this.userEmail = profile['email'] || 'No indicado';
          this.userAge = profile['edad'] || 'No indicado';
          this.userSex = profile['sexo'] || 'No indicado';
          this.userWeight = profile['peso'] || 'No indicado';
          this.userHeight = profile['altura'] || 'No indicado';
        }

    });
  }

  gotoEdit() {
    this.router.navigate(['/edit-profile']);
  }
}
