/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateResolver implements Resolve<boolean> {
  constructor(private readonly _afAuth: AngularFireAuth) {}

  async resolve(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Promise<any> {
    return firstValueFrom(this._afAuth.user)
  }
}
