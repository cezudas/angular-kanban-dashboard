import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/app';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vantage-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private readonly _stopSubscriptions$ = new Subject<void>();

  constructor(
    public readonly afAuth: AngularFireAuth,
    private readonly _route: ActivatedRoute
  ) {}

  public authUser!: firebase.User | null;

  ngOnInit(): void {
    this.authUser = this._route.snapshot.data['authState'];

    this.afAuth.user
      .pipe(takeUntil(this._stopSubscriptions$))
      .subscribe((user) => {
        this.authUser = user;
      });
  }

  ngOnDestroy(): void {
    this._stopSubscriptions$.next();
    this._stopSubscriptions$.complete();
  }
}
