export function wrapIndex(index: number, count: number): number {
  return ((index % count) + count) % count;
}
export function orbitPosition(index: number, step: number, count: number) {
  const angle = ((90 + (index - step) * (360 / count)) * Math.PI) / 180;
  return {
    x: 50 + Math.cos(angle) * 38,
    y: 50 + Math.sin(angle) * 35,
    tilt: Math.cos(angle) * -9,
  };
}
