import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {response} from 'express';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response =>{
        console.log(response);
        this.router.navigate(['/first-page']);
      })
      .catch(err => console.log(err));
  }

}
