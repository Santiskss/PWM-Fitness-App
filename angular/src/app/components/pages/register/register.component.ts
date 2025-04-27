import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserServiceService} from '../../../services/user-service.service';

@Component({
  selector: 'app-register',
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;

  constructor(private userService: UserServiceService) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      password_confirmation: new FormControl(),
    })
  }
  ngOnInit(): void {
  }
  async onSubmit() {
    const password = this.formulario.controls['password'].value;
    const password_confirmation = this.formulario.controls['password_confirmation'].value;

    if (password != password_confirmation) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log(this.formulario.value);
    this.userService.addUser(this.formulario.value).then(response => {
      console.log(response);
      this.formulario.reset();
    }).catch(error => {
      console.error('Error al registrar el usuario:', error);
    });
  }
}
