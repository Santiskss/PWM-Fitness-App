import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {UserService} from '../../services/user.service';
import {CargaService} from '../../services/carga.service';
import {Observable} from 'rxjs';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-header',
  imports: [
    RouterLink,
    NgIf
  ],
    templateUrl: './header.component.html',
    standalone: true,
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  datos_header = {
    regis: "",
    logi: "",
    pro:  "",
    crea:  "",
    ver: "",
    logo: ""
  }

  isLoggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private  router: Router,
    private carga: CargaService,
    private auth: Auth
  ) {
  }

  ngOnInit() {
    this.carga.loadData().subscribe(val =>
    {
      this.datos_header.regis = val.logeo_header[0]
      this.datos_header.logi = val.logeo_header[1]
      this.datos_header.crea = val.nav_items_header[0]
      this.datos_header.ver = val.nav_items_header[1]
      this.datos_header.pro = val.nav_items_header[2]
      this.datos_header.logo = val.logo
    });

    onAuthStateChanged(this.auth, (user) => {
      this.isLoggedIn = !!user;
    });
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch((error) => console.log(error));
  }

}
