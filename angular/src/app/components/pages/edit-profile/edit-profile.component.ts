import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Auth, updateEmail, updateProfile} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  profileForm!: FormGroup;

  constructor(
    private userService: UserService,
    private auth: Auth,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      altura: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
    });

    const user = this.auth.currentUser;
    if (user) {
      const data = await this.userService.getUserProfile(user.uid);
      if (data) {
        this.profileForm.patchValue({data});
      }
    }
  }

  async onSave(){
    const user = this.auth.currentUser;
    if (user) {
      const {name, email, ...otherData} = this.profileForm.value;
      await this.userService.updateUserProfile(user.uid, this.profileForm.value);

      try{
        await updateProfile(user, {displayName: name});
        if(user.email !== email){
          await updateEmail(user,email);
        }
      } catch(error){
        console.error('Error actualizando en Auth:', error);
        alert('Error ocurrido al actualizar');
        return;
      }

      alert('Perfil actualizado');
      this.router.navigate(['/profile']);
    }
  }
}
