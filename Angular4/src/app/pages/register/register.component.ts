import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import swal from "sweetalert2";

@Component({
    selector: 'app-register-cmp',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    username = new FormControl('', [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
    email = new FormControl('', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)]);
    password = new FormControl('', [Validators.required,
        Validators.minLength(6)]);

    role = new FormControl('', [Validators.required]);
    test: Date = new Date();

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserService,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
        if (this.auth.loggedIn) {
            this.router.navigate(['/todo']);
        }
    }

    setClassUsername() {
        return {'has-danger': !this.username.pristine && !this.username.valid};
    }

    setClassEmail() {
        return {'has-danger': !this.email.pristine && !this.email.valid};
    }

    setClassPassword() {
        return {'has-danger': !this.password.pristine && !this.password.valid};
    }

    register() {
        console.log('******');
        console.log(this.registerForm.value);
        this.userService.register(this.registerForm.value).subscribe(
            res => {
                const obj = {};
                obj['email'] = this.registerForm.value.email;
                obj['password'] = this.registerForm.value.password;
                //  this.router.navigate(['/pages/login']);
                this.auth.login(obj).subscribe(
                    res2 => {
                        this.router.navigate(['/todo']);
                        swal({
                            type: 'success',
                            title: 'Signed in successfully',
                            showConfirmButton: false,
                            timer: 3000
                        });
                    },
                    error => console.log('erreur')
                );

            },
            error => this.erreur (error, 'Register Erreur : Email Unique')
        );
    }

erreur(err, NameOfError) {
    swal(
        '' + NameOfError,
        '',
        'error'
    )
}

}
