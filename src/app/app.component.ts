import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { AuthenticationService }  from './_services';
import { User }                   from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  title = 'librenvio';
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      console.log(this.currentUser);

    }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
