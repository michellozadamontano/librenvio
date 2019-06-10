import { Component, OnInit } from '@angular/core';
import { PackageService }  from '../../_services';
@Component({
  selector: 'app-package-index',
  templateUrl: './package-index.component.html',
  styleUrls: ['./package-index.component.css']
})
export class PackageIndexComponent implements OnInit {

  constructor(
    private packageS: PackageService
  ) { }

  ngOnInit() {
    this.getPackageType();
    this.getPackageByUser();
  }
  getPackageType() {
    this.packageS.getPackageType().subscribe(resp => {
      console.log('tipo paquetes ',resp);

    })
  }
  getPackageByUser() {
    let user = JSON.parse(localStorage.getItem('currentUser'));
  console.log(user.id);

    this.packageS.getPackageByUser(user.id).subscribe(resp => {
      console.log('Paqutes ',resp);

    })
  }

}
