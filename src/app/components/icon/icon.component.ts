import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path [attr.d]="paths[name]" />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-flex;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        vertical-align: -0.12em;
      }
      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name: 'up-right' | 'down' | 'left' | 'right' | 'plus' | 'minus' =
    'up-right';
  readonly paths = {
    'up-right': 'M6 18 18 6M6 6h12v12',
    down: 'M12 4v16m-7-7 7 7 7-7',
    left: 'M20 12H4m7-7-7 7 7 7',
    right: 'M4 12h16m-7-7 7 7-7 7',
    plus: 'M12 5v14M5 12h14',
    minus: 'M5 12h14',
  };
}
