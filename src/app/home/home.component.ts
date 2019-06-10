import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { AuthenticationService, PackageService }  from '../_services';
import { User }                   from '../_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router,
    private authenticationService: AuthenticationService,

    ) {
      if(localStorage.getItem('currentUser'))
      {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
     }

  ngOnInit() {

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
