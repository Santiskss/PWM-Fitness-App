import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {UserService} from '../../services/user.service';
import {CargaService} from '../../services/carga.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-header',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './header.component.html',
    standalone: true,
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  datos?: Observable<any>
  regis: string = ""
  logi: string = ""
  crea: string = ""
  pro: string = ""
  constructor(
    private userService: UserService,
    private  router: Router,
    private carga: CargaService
  ) {
  }

  ngOnInit() {
    this.carga.loadHeader().subscribe(val =>
    {
      console.log(val)
      this.datos = val
      this.regis = val.logeo_header[0]
      this.logi = val.logeo_header[1]
      this.crea = val.nav_items_header[0]
      this.pro = val.nav_items_header[1]
    })
  }

  onClick(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch((error) => console.log(error));
  }
}
