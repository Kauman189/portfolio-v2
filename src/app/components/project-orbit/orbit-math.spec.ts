import { orbitPosition, wrapIndex } from './orbit-math';
describe('Circular project navigation', () => {
  it('wraps backward and forward across repeated revolutions', () => {
    expect(wrapIndex(-1, 6)).toBe(5);
    expect(wrapIndex(6, 6)).toBe(0);
    expect(wrapIndex(-13, 6)).toBe(5);
  });
  it('keeps cards on the ellipse throughout continuous rotation', () => {
    for (let step = -12; step < 12; step += 0.13) {
      for (let index = 0; index < 6; index++) {
        const p = orbitPosition(index, step, 6);
        expect(((p.x - 50) / 38) ** 2 + ((p.y - 50) / 35) ** 2).toBeCloseTo(
          1,
          8,
        );
      }
    }
  });
  it('returns to the same positions after one full turn without a jump', () => {
    for (let index = 0; index < 6; index++) {
      const a = orbitPosition(index, 0.75, 6),
        b = orbitPosition(index, 6.75, 6);
      expect(a.x).toBeCloseTo(b.x, 8);
      expect(a.y).toBeCloseTo(b.y, 8);
    }
  });
  it('centers the selected project at the front', () => {
    const p = orbitPosition(3, 3, 6);
    expect(p.x).toBeCloseTo(50);
    expect(p.y).toBeCloseTo(85);
  });
});
