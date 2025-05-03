import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {FooterComponent} from '../../footer/footer.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {CargaService} from '../../../services/carga.service';

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
  google_icon  = ""
  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private cargaService: CargaService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() {
    this.cargaService.loadData().subscribe(data =>
    {
      this.google_icon = data.logoGoogle
    })
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response =>{
        console.log(response);
        this.router.navigate(['/first-page']);
      })
      .catch(err => console.log(err));
  }

  onclick(){
    this.userService.loginwithgoogle()
      .then(response =>{
        console.log(response);
        this.router.navigate(['/first-page']);
      })
    .catch(err => console.log(err));
  }

}
