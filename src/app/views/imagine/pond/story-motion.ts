export const clamp = (n: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, n));
export const ease = (n: number) => {
  const p = clamp(n);
  return p * p * (3 - 2 * p);
};
export const between = (p: number, a: number, b: number) =>
  ease((p - a) / (b - a));
export const mix = (a: number, b: number, p: number) => a + (b - a) * p;
/** A reversible film timeline. Every pose is derived from scroll, never accumulated. */
export function storyPose(progress: number, time = 0) {
  const p = clamp(progress);
  const meet = between(p, 0.16, 0.32);
  const jump = between(p, 0.33, 0.4);
  const recover = between(p, 0.4, 0.46);
  const close = between(p, 0.49, 0.62);
  const shelter = between(p, 0.63, 0.71);
  const dance = between(p, 0.77, 0.87);
  const together = between(p, 0.87, 0.95);
  const distance = mix(mix(2.35, 1.7, meet), 0.98, close);
  const danceAngle = dance * Math.PI * 2;
  const turn = Math.sin(danceAngle) * 0.75 * (1 - together);
  return {
    xA: -distance + Math.sin(jump * Math.PI) * 1.25 + turn,
    xB: distance - turn + (1 - between(p, 0.06, 0.16)) * 9,
    yA: Math.sin(jump * Math.PI) * 2.2 - Math.sin(recover * Math.PI) * 0.45,
    yB: Math.sin(dance * Math.PI * 6) * 0.14 * (1 - together),
    zA: Math.sin(danceAngle) * 0.85,
    zB: -Math.sin(danceAngle) * 0.85,
    turnA: mix(0.12, 0.55, meet) - together * 0.38,
    turnB: mix(-0.12, -0.55, meet) + together * 0.38,
    tiltA: Math.sin(jump * Math.PI * 2) * -0.3 + shelter * -0.1,
    tiltB: shelter * 0.1,
    wave:
      Math.sin(time * 2.3) *
      0.2 *
      (between(p, 0.2, 0.23) - between(p, 0.3, 0.34)),
    flower: between(p, 0.49, 0.58),
    rain: between(p, 0.62, 0.65) * (1 - between(p, 0.73, 0.76)),
    night: between(p, 0.74, 0.86) * (1 - between(p, 0.94, 1)),
    hearts: between(p, 0.82, 0.94),
    umbrella: between(p, 0.65, 0.7) * (1 - between(p, 0.74, 0.79)),
    splash: Math.sin(recover * Math.PI),
    together,
  };
}

/** Match each action to the caption's actual reading position, including mobile layouts. */
export const STORY_BEATS = [
  0.015, 0.145, 0.25, 0.36, 0.43, 0.555, 0.615, 0.7, 0.78, 0.83, 0.92, 1,
] as const;
export function storyAtScroll(
  scroll: number,
  anchors: readonly number[],
): number {
  if (scroll <= anchors[0]) return STORY_BEATS[0];
  for (let i = 1; i < anchors.length; i++) {
    if (scroll <= anchors[i])
      return mix(
        STORY_BEATS[i - 1],
        STORY_BEATS[i],
        clamp(
          (scroll - anchors[i - 1]) / Math.max(1, anchors[i] - anchors[i - 1]),
        ),
      );
  }
  return 1;
}
