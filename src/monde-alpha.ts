import * as thr from 'three';

const scene_1 = new thr.Scene();

const camera_1 = new thr.PerspectiveCamera();

const geometrie_entite_1 = new thr.BoxGeometry(
    1,
    1,
    1
);

const materiau_entite_1 = new thr.MeshBasicMaterial({
    color: 0x00ff00
});

const maillage_entite_1 = new thr.Mesh(
    geometrie_entite_1,
    materiau_entite_1
);

const lumiere_1 = new thr.AmbientLight(
    "white",
    1.5
);

scene_1.add(maillage_entite_1);
scene_1.add(lumiere_1);
scene_1.add(camera_1);

camera_1.position.z =- 3;

const rendu_1 = new thr.WebGLRenderer();

console.log("test");