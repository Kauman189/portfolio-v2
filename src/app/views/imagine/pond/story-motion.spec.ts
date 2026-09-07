import { storyPose, storyAtScroll, STORY_BEATS } from './story-motion';
import { PondWorld } from './pond-world';
import { Color, Mesh, WebGLRenderer } from 'three';

describe('Imagine film', () => {
  it('aligns every caption with its action at desktop and mobile reading positions', () => {
    for (const [chapterHeight, viewport, offset] of [
      [1000, 800, 100],
      [960, 800, 0],
    ]) {
      const anchors = Array.from(
        { length: 12 },
        (_, i) => i * chapterHeight + offset,
      );
      anchors.forEach((anchor, i) =>
        expect(storyAtScroll(anchor, anchors)).toBeCloseTo(STORY_BEATS[i], 6),
      );
      expect(
        storyPose(storyAtScroll(anchors[4], anchors)).splash,
      ).toBeGreaterThan(0.8);
      expect(
        storyPose(storyAtScroll(anchors[5], anchors)).flower,
      ).toBeGreaterThan(0.5);
      expect(storyPose(storyAtScroll(anchors[8], anchors)).rain).toBe(0);
    }
  });
  it('can scrub the whole film backwards and forwards without accumulating motion', () => {
    const original = storyPose(0.56, 3);
    for (let i = 0; i <= 100; i++) {
      const pose = storyPose(i / 100, 3);
      Object.values(pose).forEach((n) => expect(Number.isFinite(n)).toBeTrue());
    }
    expect(storyPose(0.56, 3)).toEqual(original);
    expect(storyPose(-1)).toEqual(storyPose(0));
    expect(storyPose(2)).toEqual(storyPose(1));
  });
  it('stages the arrival, jump, shelter and ending in narrative order', () => {
    expect(storyPose(0).xB).toBeGreaterThan(8);
    expect(storyPose(0.25).xB).toBeLessThan(3.2);
    expect(storyPose(0.365).yA).toBeGreaterThan(2);
    expect(storyPose(0.7).rain).toBeGreaterThan(0.9);
    expect(storyPose(0.7).umbrella).toBe(1);
    expect(storyPose(0.99).rain).toBe(0);
    expect(storyPose(0.99).hearts).toBe(1);
    expect(Math.abs(storyPose(1).xB - storyPose(1).xA)).toBeLessThan(2);
  });
  it('renders the procedural world and releases it after leaving', () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2');
    if (!gl) {
      pending('WebGL2 unavailable in this test runner');
      return;
    }
    const renderer = new WebGLRenderer({ canvas, context: gl });
    renderer.shadowMap.enabled = true;
    const world = new PondWorld();
    try {
      renderer.setSize(320, 480, false);
      world.resize(320, 480);
      for (const p of [0, 0.17, 0.37, 0.44, 0.58, 0.7, 0.85, 1]) {
        world.update(p, 3, false);
        expect((world.scene.background as Color).getHexString()).toBe('fafaf8');
        renderer.render(world.scene, world.camera);
        expect(renderer.info.render.triangles).toBeGreaterThan(1000);
        expect(gl.getError()).toBe(gl.NO_ERROR);
      }
      let count = 0;
      world.scene.traverse((o) => {
        if (o instanceof Mesh) count++;
      });
      expect(count).toBeGreaterThan(100);
      world.dispose();
      expect(world.scene.children.length).toBe(0);
    } finally {
      world.dispose();
      renderer.dispose();
    }
  });
});
