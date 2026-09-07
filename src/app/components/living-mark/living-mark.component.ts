import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-living-mark',
  standalone: true,
  template: `@if (variant === 'frog') {
      <svg viewBox="0 0 100 100" class="frog" aria-hidden="true">
        <path
          class="face"
          d="M18 46C8 24 19 11 33 16 40 18 42 25 43 29H57C58 25 60 18 67 16 81 11 92 24 82 46 95 65 82 86 50 86S5 65 18 46Z"
        />
        <g class="eyes">
          <ellipse cx="30" cy="35" rx="10" ry="13" />
          <ellipse cx="70" cy="35" rx="10" ry="13" />
          <circle class="pupil" cx="32" cy="37" r="4" />
          <circle class="pupil" cx="68" cy="37" r="4" />
        </g>
        <path class="smile" d="M32 62Q50 77 68 62" />
        <path class="cheeks" d="M19 57h8m46 0h8" />
      </svg>
    } @else {
      <svg viewBox="0 0 100 110" class="flower" aria-hidden="true">
        <path
          class="stem"
          d="M50 99V48M50 83C29 85 23 69 23 69 43 66 50 83 50 83ZM50 73C67 75 78 60 78 60 60 58 50 73 50 73Z"
        />
        <g class="blossom">
          <ellipse cx="50" cy="21" rx="13" ry="20" />
          <ellipse
            cx="50"
            cy="21"
            rx="13"
            ry="20"
            transform="rotate(72 50 39)"
          />
          <ellipse
            cx="50"
            cy="21"
            rx="13"
            ry="20"
            transform="rotate(144 50 39)"
          />
          <ellipse
            cx="50"
            cy="21"
            rx="13"
            ry="20"
            transform="rotate(216 50 39)"
          />
          <ellipse
            cx="50"
            cy="21"
            rx="13"
            ry="20"
            transform="rotate(288 50 39)"
          />
          <circle class="flower-center" cx="50" cy="39" r="10" />
        </g>
      </svg>
    }`,
  styles: [
    `
      :host {
        display: inline-block;
        width: 1em;
        height: 1em;
        color: var(--accent);
      }
      svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }
      .face,
      .blossom {
        fill: currentColor;
      }
      .eyes {
        fill: var(--paper);
        animation: frog-blink 6.7s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .pupil {
        fill: currentColor;
      }
      .smile {
        stroke: var(--paper);
        stroke-width: 3;
        stroke-linecap: round;
        fill: none;
      }
      .cheeks {
        stroke: var(--paper);
        stroke-width: 3;
        stroke-linecap: round;
        opacity: 0.6;
      }
      .frog {
        animation: frog-bob 4s ease-in-out infinite;
      }
      .stem {
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
      }
      .blossom {
        transform-origin: 50px 55px;
        animation: flower-sway 5s ease-in-out infinite;
      }
      .flower-center {
        fill: var(--paper);
      }
      @keyframes frog-blink {
        0%,
        43%,
        47%,
        100% {
          transform: scaleY(1);
        }
        45% {
          transform: scaleY(0.12);
        }
      }
      @keyframes frog-bob {
        50% {
          transform: translateY(-3px) rotate(-3deg);
        }
      }
      @keyframes flower-sway {
        0%,
        100% {
          transform: rotate(-7deg);
        }
        50% {
          transform: rotate(8deg);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        svg,
        .eyes,
        .blossom {
          animation: none;
        }
      }
    `,
  ],
})
export class LivingMarkComponent {
  @Input() variant: 'flower' | 'frog' = 'flower';
}
