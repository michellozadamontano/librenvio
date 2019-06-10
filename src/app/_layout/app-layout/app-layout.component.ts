import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';

import { AuthenticationService }  from '../../_services';
import { User }                   from '../../_models';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  currentUser: User;
  title = 'librenvio';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
     // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      if(localStorage.getItem('currentUser'))
      {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }
    }
  ngOnInit(){
    console.log(this.currentUser)
  }
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/']);
  }

}
