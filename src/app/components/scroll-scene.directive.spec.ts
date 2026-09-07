import { sceneProgress } from './scroll-scene.directive';
describe('Scroll-driven design process', () => {
  it('holds the first phase before the scene and the last phase after it', () => {
    expect(sceneProgress(200, 3200, 800)).toBe(0);
    expect(sceneProgress(-3000, 3200, 800)).toBe(1);
  });
  it('maps the sticky scroll distance to four sequential phases', () => {
    const height = 3200,
      viewport = 800;
    expect(sceneProgress(-300, height, viewport)).toBe(0.125);
    expect(sceneProgress(-900, height, viewport)).toBe(0.375);
    expect(sceneProgress(-1500, height, viewport)).toBe(0.625);
    expect(sceneProgress(-2100, height, viewport)).toBe(0.875);
  });
  it('remains finite when the static fallback is shorter than the viewport', () => {
    expect(Number.isFinite(sceneProgress(-5, 400, 800))).toBeTrue();
  });
});
