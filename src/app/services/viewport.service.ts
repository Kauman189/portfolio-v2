import { DestroyRef, Injectable, inject, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ViewportService {
  private query = matchMedia('(max-width: 759px)');
  readonly mobile = signal(this.query.matches);
  constructor() {
    const update = () => this.mobile.set(this.query.matches);
    this.query.addEventListener('change', update);
    inject(DestroyRef).onDestroy(() =>
      this.query.removeEventListener('change', update),
    );
  }
}
