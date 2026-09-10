import * as T from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { between, mix, storyPose } from './story-motion';

interface Frog {
  root: T.Group;
  body: T.Group;
  eyes: T.Group[];
  arms: T.Group[];
  cheeks: T.Mesh[];
}
const sphere = new T.SphereGeometry(1, 24, 16);
const cube = new RoundedBoxGeometry(1, 1, 1, 3, 0.18);

const petalGeometry = new T.SphereGeometry(1, 16, 10);
const PAPER = new T.Color('#ffffff');

/** Original cartoon characters with flat shading and a compact pond; no model downloads or textures. */
export class PondWorld {
  readonly scene = new T.Scene();
  readonly camera = new T.OrthographicCamera(-10, 10, 6, -6, 0.1, 100);
  readonly world = new T.Group();
  private materials = new Set<T.Material>();
  private geometries = new Set<T.BufferGeometry>();
  private frogA: Frog;
  private frogB: Frog;
  private leaves: T.Group[] = [];
  private sharedLeaf: T.Group;
  private ripples: T.Mesh<T.RingGeometry, T.MeshBasicMaterial>[] = [];
  private flower: T.Group;
  private umbrella: T.Group;
  private hearts: T.Group[] = [];
  private rain: T.LineSegments;
  private rainPositions: Float32Array;
  private sun = new T.DirectionalLight('#ffefd1', 2.1);
  private fill = new T.HemisphereLight('#fff5d9', '#688a73', 0.85);
  private mobile = false;
  private cameraTarget = new T.Vector3();
  private tones = new T.DataTexture(
    new Uint8Array([
      55, 55, 55, 255, 130, 130, 130, 255, 208, 208, 208, 255, 255, 255, 255,
      255,
    ]),
    4,
    1,
    T.RGBAFormat,
  );
  private ink = new T.MeshBasicMaterial({ color: '#3c5237', side: T.BackSide });

  constructor() {
    this.tones.minFilter = T.NearestFilter;
    this.tones.magFilter = T.NearestFilter;
    this.tones.generateMipmaps = false;
    this.tones.needsUpdate = true;
    this.materials.add(this.ink);
    this.geometries.add(cube);
    this.geometries.add(sphere);
    this.geometries.add(petalGeometry);
    this.scene.background = PAPER.clone();
    this.scene.add(this.world, this.fill, this.sun);
    this.sun.position.set(-4, 9, 7);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    Object.assign(this.sun.shadow.camera, {
      left: -10,
      right: 10,
      top: 10,
      bottom: -10,
      near: 0.5,
      far: 35,
    });
    this.sun.shadow.normalBias = 0.025;
    this.sun.shadow.bias = -0.0001;
    const rim = new T.DirectionalLight('#d5ecdc', 0.55);
    rim.position.set(5, 4, -5);
    this.scene.add(rim);
    const pond = new T.Mesh(
      this.keep(new T.CylinderGeometry(3.6, 3.6, 0.045, 80)),
      this.mat('#d7e5d8', 0.23),
    );
    pond.position.y = -0.31;
    pond.receiveShadow = true;
    this.world.add(pond);
    for (let i = 0; i < 4; i++) {
      const ring = new T.Mesh(
        this.keep(new T.RingGeometry(0.92, 0.94, 72)),
        new T.MeshBasicMaterial({
          color: '#eaf4e8',
          transparent: true,
          opacity: 0.55,
          side: T.DoubleSide,
          depthWrite: false,
        }),
      );
      this.materials.add(ring.material);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(
        Math.cos(i * 2.4) * 1.7,
        -0.16 + i * 0.001,
        Math.sin(i * 2.4) * 1.5,
      );
      this.world.add(ring);
      this.ripples.push(ring);
    }
    for (let i = 0; i < 2; i++) {
      const leaf = this.lily(i < 2 ? 1.35 : 0.5 + (i % 3) * 0.17);
      if (i < 2) leaf.position.set(i === 0 ? -3.2 : 3.2, -0.12, 0);
      else
        leaf.position.set(
          Math.cos(i * 2.4) * (4 + (i % 3)),
          -0.12,
          Math.sin(i * 2.4) * 4.3,
        );
      leaf.rotation.y = i * 1.75;
      this.world.add(leaf);
      this.leaves.push(leaf);
    }
    this.sharedLeaf = this.lily(2.4);
    this.sharedLeaf.position.y = -0.075;
    this.world.add(this.sharedLeaf);
    this.frogA = this.frog('#85a65a', false);
    this.frogB = this.frog('#b6c779', true);
    this.world.add(this.frogA.root, this.frogB.root);
    this.flower = this.bloom();
    this.world.add(this.flower);
    this.umbrella = new T.Group();
    const stalk = this.line(
      [
        [0, 0, 0],
        [0.1, 1.6, 0],
        [0, 2.5, 0],
      ],
      '#526f3c',
      0.035,
    );
    this.umbrella.add(stalk);
    const canopy = this.lily(2);
    canopy.rotation.x = -0.14;
    canopy.position.y = 2.5;
    this.umbrella.add(canopy);
    this.world.add(this.umbrella);
    const heartMaterial = this.mat('#003c29');
    const heartShape = new T.Shape();
    heartShape.moveTo(0, -0.6);
    heartShape.bezierCurveTo(-1.1, 0.1, -0.6, 0.85, 0, 0.4);
    heartShape.bezierCurveTo(0.6, 0.85, 1.1, 0.1, 0, -0.6);
    const heartGeo = this.keep(
      new T.ExtrudeGeometry(heartShape, {
        depth: 0.12,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.055,
        bevelThickness: 0.06,
        curveSegments: 12,
      }),
    );
    for (let i = 0; i < 4; i++) {
      const group = new T.Group();
      group.add(new T.Mesh(heartGeo, heartMaterial));
      this.world.add(group);
      this.hearts.push(group);
    }
    this.rainPositions = new Float32Array(100 * 6);
    const rainGeo = this.keep(new T.BufferGeometry());
    rainGeo.setAttribute(
      'position',
      new T.BufferAttribute(this.rainPositions, 3).setUsage(T.DynamicDrawUsage),
    );
    const rainMat = new T.LineBasicMaterial({
      color: '#809eaa',
      transparent: true,
      opacity: 0.35,
    });
    this.materials.add(rainMat);
    this.rain = new T.LineSegments(rainGeo, rainMat);
    this.rain.frustumCulled = false;
    this.world.add(this.rain);
    this.resize(1200, 800);
    this.update(0, 0, false);
  }
  private keep<G extends T.BufferGeometry>(geometry: G): G {
    this.geometries.add(geometry);
    return geometry;
  }
  private mat(color: string, roughness = 0.77) {
    const m = new T.MeshToonMaterial({ color, gradientMap: this.tones });
    this.materials.add(m);
    return m;
  }
  private ellipsoid(
    parent: T.Object3D,
    material: T.Material,
    scale: number[],
    position: number[],
    geo = sphere,
  ) {
    const mesh = new T.Mesh(geo, material);
    mesh.scale.set(scale[0], scale[1], scale[2]);
    mesh.position.set(position[0], position[1], position[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  private line(points: number[][], color: string, radius: number) {
    const curve = new T.CatmullRomCurve3(
      points.map((p) => new T.Vector3(p[0], p[1], p[2])),
    );
    return new T.Mesh(
      this.keep(new T.TubeGeometry(curve, 18, radius, 6, false)),
      this.mat(color),
    );
  }
  private soft(
    parent: T.Object3D,
    material: T.Material,
    size: number[],
    position: number[],
  ) {
    const mesh = new T.Mesh(cube, material);
    mesh.scale.set(size[0], size[1], size[2]);
    mesh.position.set(position[0], position[1], position[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    const outline = new T.Mesh(cube, this.ink);
    outline.scale.setScalar(1.025);
    mesh.add(outline);
    parent.add(mesh);
    return mesh;
  }
  private frog(color: string, freckled: boolean): Frog {
    const root = new T.Group(),
      body = new T.Group();
    root.add(body);
    const skin = this.mat(freckled ? '#acc67d' : '#8dab69'),
      belly = this.mat('#eeebc2'),
      white = this.mat('#fffced'),
      dark = this.mat('#263528'),
      blush = this.mat('#e7b295');
    this.soft(body, skin, [1.34, 1.12, 1.03], [0, 0.7, 0]);
    this.ellipsoid(body, belly, [0.51, 0.43, 0.16], [0, 0.69, 0.5]);
    this.soft(body, skin, [1.68, 0.81, 1.13], [0, 1.33, 0.06]);
    const eyes: T.Group[] = [],
      arms: T.Group[] = [],
      cheeks: T.Mesh[] = [];
    for (const sign of [-1, 1]) {
      this.soft(body, skin, [0.46, 0.29, 0.7], [sign * 0.58, 0.16, 0.18]);
      for (let i = 0; i < 3; i++)
        this.ellipsoid(
          body,
          skin,
          [0.068, 0.06, 0.15],
          [sign * 0.58 + (i - 1) * 0.14, 0.07, 0.54],
        );
      const eye = new T.Group();
      eye.position.set(sign * 0.46, 1.65, 0.36);
      body.add(eye);
      this.ellipsoid(eye, skin, [0.32, 0.39, 0.27], [0, 0, 0]);
      this.ellipsoid(eye, white, [0.245, 0.3, 0.14], [0, 0.025, 0.2]);
      this.ellipsoid(
        eye,
        dark,
        [0.13, 0.19, 0.07],
        [-sign * 0.04, 0.035, 0.327],
      );
      this.ellipsoid(
        eye,
        white,
        [0.045, 0.055, 0.018],
        [-sign * 0.04 + 0.04, 0.1, 0.393],
      );
      this.ellipsoid(
        eye,
        white,
        [0.021, 0.025, 0.014],
        [-sign * 0.04 - 0.035, -0.03, 0.395],
      );
      eyes.push(eye);
      cheeks.push(
        this.ellipsoid(
          body,
          blush,
          [0.18, 0.085, 0.022],
          [sign * 0.58, 1.24, 0.636],
        ),
      );
      const arm = new T.Group();
      arm.position.set(sign * 0.63, 0.95, 0.2);
      body.add(arm);
      this.soft(arm, skin, [0.22, 0.53, 0.23], [sign * 0.055, -0.23, 0.15]);
      this.ellipsoid(arm, skin, [0.16, 0.1, 0.19], [sign * 0.07, -0.5, 0.22]);
      arms.push(arm);
      this.ellipsoid(
        body,
        dark,
        [0.018, 0.024, 0.016],
        [sign * 0.125, 1.4, 0.634],
      );
    }
    body.add(
      this.line(
        [
          [-0.27, 1.2, 0.644],
          [-0.16, 1.145, 0.658],
          [0, 1.126, 0.666],
          [0.16, 1.145, 0.658],
          [0.27, 1.2, 0.644],
        ],
        '#43553a',
        0.022,
      ),
    );
    if (freckled) {
      const flower = this.bloom();
      flower.scale.setScalar(0.26);
      flower.position.set(0.6, 1.53, 0.02);
      flower.rotation.z = -0.2;
      body.add(flower);
    } else {
      const scarf = this.mat('#d99063');
      this.soft(body, scarf, [1.19, 0.1, 0.08], [0, 1.02, 0.577]);
      this.soft(body, scarf, [0.14, 0.23, 0.085], [-0.36, 0.89, 0.579]);
    }
    root.name = freckled ? 'June' : 'Milo';
    return { root, body, eyes, arms, cheeks };
  }
  private lily(radius: number) {
    const group = new T.Group();
    const shape = new T.Shape();
    shape.moveTo(0, 0);
    for (let i = 0; i <= 56; i++) {
      const a = 0.22 + (i / 56) * (Math.PI * 2 - 0.44);
      shape.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
    }
    shape.closePath();
    const leaf = new T.Mesh(
      this.keep(
        new T.ExtrudeGeometry(shape, {
          depth: 0.055,
          bevelEnabled: true,
          bevelThickness: 0.025,
          bevelSize: 0.035,
          bevelSegments: 2,
          steps: 1,
        }),
      ),
      this.mat('#7f9c5c'),
    );
    leaf.rotation.x = -Math.PI / 2;
    leaf.receiveShadow = true;
    group.add(leaf);
    const veins = this.mat('#a6bd7b');
    for (let i = 1; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const v = this.ellipsoid(
        group,
        veins,
        [0.014, 0.008, radius * 0.39],
        [Math.cos(a) * radius * 0.39, 0.07, Math.sin(a) * radius * 0.39],
      );
      v.rotation.y = Math.PI / 2 - a;
    }
    return group;
  }
  private bloom() {
    const flower = new T.Group();
    flower.add(
      this.line(
        [
          [0, 0, 0],
          [0.08, 0.5, 0],
          [0, 1.1, 0],
        ],
        '#536d3e',
        0.033,
      ),
    );
    const petals = this.mat('#003c29');
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const p = this.ellipsoid(
        flower,
        petals,
        [0.19, 0.29, 0.1],
        [Math.sin(a) * 0.2, 1.15 + Math.cos(a) * 0.2, 0.02],
        petalGeometry,
      );
      p.rotation.z = -a;
    }
    this.ellipsoid(
      flower,
      this.mat('#f2cf70'),
      [0.13, 0.13, 0.13],
      [0, 1.15, 0.13],
    );
    return flower;
  }
  resize(width: number, height: number) {
    this.mobile = width < 760;
    const aspect = width / Math.max(1, height);
    const size = this.mobile ? Math.max(5.0, 2.5 / aspect) : 5.2;
    Object.assign(this.camera, {
      left: -size * aspect,
      right: size * aspect,
      top: size,
      bottom: -size,
    });
    this.camera.updateProjectionMatrix();
  }
  update(progress: number, time: number, reduced: boolean) {
    const p = progress,
      t = reduced ? 0 : time * 0.55,
      pose = storyPose(p, t);
    this.world.position.set(
      this.mobile ? 0 : 2.6,
      this.mobile ? -0.2 : -0.25,
      0,
    );
    this.world.scale.setScalar(this.mobile ? 1 : 1.2);
    const spread = this.mobile ? mix(0.86, 1, between(p, 0.3, 0.62)) : 1;
    const cameraAngle = reduced ? 0 : Math.sin(p * Math.PI * 2) * 0.13;
    this.camera.position.set(
      Math.sin(cameraAngle) * 13,
      5.8 - between(p, 0.15, 0.3) * 0.3,
      13,
    );
    this.cameraTarget.set(0, this.mobile ? 2.55 : 0.25, 0);
    this.camera.lookAt(this.cameraTarget);
    this.frogA.root.position.set(pose.xA * spread, 0.02 + pose.yA, pose.zA);
    this.frogB.root.position.set(pose.xB * spread, 0.02 + pose.yB, pose.zB);
    this.frogA.root.rotation.set(0, pose.turnA, pose.tiltA);
    this.frogB.root.rotation.set(0, pose.turnB, pose.tiltB);
    for (const [i, frog] of [this.frogA, this.frogB].entries()) {
      const breath = Math.sin(t * 1.7 + i) * 0.012;
      frog.body.scale.set(1 - breath * 0.3, 1 + breath, 1 - breath * 0.3);
      const blink = Math.pow(Math.max(0, Math.cos(t * 0.85 + i * 2.5)), 70);
      frog.eyes.forEach(
        (eye) => (eye.scale.y = reduced ? 1 : 1 - blink * 0.86),
      );
      frog.arms[0].rotation.z =
        i === 1 ? -pose.wave - pose.flower * 0.16 - pose.together * 1.05 : 0;
      frog.arms[1].rotation.z =
        i === 0 ? pose.flower * 0.42 + pose.together * 0.7 : 0;
      frog.arms[i === 0 ? 1 : 0].rotation.x = -pose.together * 0.3;
      frog.cheeks.forEach((cheek) => {
        cheek.scale.x = 0.18 + pose.hearts * 0.025;
      });
    }
    const sharing = between(p, 0.55, 0.64);
    this.sharedLeaf.scale.setScalar(Math.max(0.001, sharing));
    this.sharedLeaf.rotation.z = Math.sin(t * 0.6) * 0.012;
    this.leaves[0].scale.setScalar(Math.max(0.001, 1 - sharing));
    this.leaves[1].scale.setScalar(Math.max(0.001, 1 - sharing));
    this.leaves[0].position.x = pose.xA * spread;
    this.leaves[1].position.x = pose.xB * spread;
    this.leaves[0].position.z = pose.zA;
    this.leaves[1].position.z = pose.zB;
    this.leaves.forEach((leaf, i) => {
      leaf.position.y = -0.12 + Math.sin(t * 0.9 + i) * 0.025;
      leaf.rotation.z = Math.sin(t * 0.6 + i) * 0.012;
    });
    this.ripples.forEach((ring, i) => {
      const phase = (t * 0.15 + i * 0.21) % 1;
      const s = 0.5 + phase * 0.75 + pose.splash * 0.4;
      ring.scale.setScalar(s);
      ring.material.opacity = 0.1 + Math.sin(phase * Math.PI) * 0.24;
    });
    this.flower.visible = pose.flower > 0.001;
    this.flower.position.set(mix(-1, 0.1, pose.flower), 0.35, 0.8);
    this.flower.scale.setScalar(pose.flower * 0.7);
    this.flower.rotation.z = -0.3 + pose.flower * 0.5;
    this.umbrella.visible = pose.umbrella > 0.001;
    this.umbrella.position.set(0, 0.4, -0.7);
    this.umbrella.scale.setScalar(pose.umbrella);
    this.umbrella.rotation.z = -0.12;
    this.rain.visible = pose.rain > 0.001;
    if (this.rain.visible) {
      (this.rain.material as T.LineBasicMaterial).opacity = pose.rain * 0.45;
      for (let i = 0; i < 100; i++) {
        const x = Math.sin(i * 12.3) * 3.2,
          y = 7 - ((t * 6 + i * 0.39) % 7),
          z = Math.cos(i * 7.9) * 1.8;
        this.rainPositions.set([x, y, z, x - 0.045, y + 0.22, z], i * 6);
      }
      this.rain.geometry.attributes['position'].needsUpdate = true;
    }
    this.hearts.forEach((heart, i) => {
      const phase = (t * 0.12 + i * 0.18) % 1;
      heart.visible = pose.hearts > 0.01;
      heart.scale.setScalar(
        (0.13 + (i % 3) * 0.045) * pose.hearts * Math.sin(phase * Math.PI),
      );
      heart.position.set(
        Math.sin(i * 4.5) * (1 + phase),
        2 + phase * 3,
        Math.cos(i) * 0.7,
      );
      heart.rotation.set(
        0,
        Math.sin(t + i) * 0.3,
        Math.sin(t * 0.6 + i) * 0.17,
      );
    });
    this.world.updateMatrixWorld(true);
  }
  dispose() {
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
    this.tones.dispose();
    this.sun.shadow.dispose();
    this.scene.clear();
  }
}
