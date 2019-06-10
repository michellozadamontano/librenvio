import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }             from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AlertService, RegisterService }      from '../_services';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form      : FormGroup;
  submitted = false;
  loading   = false;
  hide      = true;
  constructor(
    private formBuilder     : FormBuilder,
    private route           : ActivatedRoute,
    private router          : Router,
    private alertService    : AlertService,
    private registerService : RegisterService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.formBuilder.group({
      username        : ['', Validators.required],
      lastname        : ['', Validators.required],
      password        : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      password_confirm: ['', Validators.required],
      email           : ['', Validators.compose([Validators.required, Validators.email])],
      phone           : ['', Validators.required],
      sexo            : ['', Validators.required],
      state           : ['', Validators.required],
      city            : ['', Validators.required],
      number          : ['', Validators.required],
      postal_code     : ['', Validators.required],
    }, {
      validator: MustMatch('password', 'password_confirm')
    });
  }
  getErrorMessage() {
    return this.f.email.hasError('required') ? 'Introduzca un correo valido por favor' :
        this.f.email.hasError('email') ? 'email no valido' :
            '';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    let user = {
      name        : this.f.username.value + ' ' + this.f.lastname.value,
      email       : this.f.email.value,
      password    : this.f.password.value,
      password_confirmation: this.f.password_confirm.value,
      phone       : this.f.phone.value,
      sexo        : this.f.sexo.value,
      state       : this.f.state.value,
      city        : this.f.city.value,
      number      : this.f.number.value,
      postal_code : this.f.postal_code.value
    }
    this.registerService.createUser(user).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      if (resp && resp.data.api_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resp.data));
        localStorage.setItem('access_token', resp.data.api_token);
        this.router.navigate(['/app/product']);
      }

    },
    error => {
      this.loading = false;
      this.submitted = false;
      console.log(error);

    })


  }

}
