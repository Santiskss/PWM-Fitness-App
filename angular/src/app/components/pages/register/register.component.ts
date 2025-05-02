import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../footer/footer.component';
import {HeaderComponent} from '../../header/header.component';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  formReg: FormGroup;

  constructor(private userService: UserService,
              private router: Router) {
    this.formReg = new FormGroup({
      name: new FormControl(),
      edad: new FormControl(),
      sexo: new FormControl(),
      altura: new FormControl(),
      peso: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {}

  onSubmit() {
    this.userService.register(this.formReg.value)
      .then(response =>{
        console.log(response);
        localStorage.setItem('userName', this.formReg.value.name);
        localStorage.setItem('userAge', this.formReg.value.edad);
        localStorage.setItem('userSex', this.formReg.value.sexo);
        localStorage.setItem('userHeight', this.formReg.value.height);
        localStorage.setItem('userWeight', this.formReg.value.weight);

        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
