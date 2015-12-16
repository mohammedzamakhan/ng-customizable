import { Component, View } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from '../../modules/auth/auth-route-helper';
import { AuthService } from '../../modules/auth/auth-service';


@Component({
  moduleId: module.id,
  selector: 'sign-in'
})

@View({
  styleUrls: ['./sign-in.css'],
  templateUrl: './sign-in.html'
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SignIn {
  constructor(private auth: AuthService, private router: Router) {}

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/Tasks']);
  }
}
