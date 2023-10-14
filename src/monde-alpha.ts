import * as thr from 'three';

const scene_1 = new thr.Scene();

const camera_1 = new thr.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const geometrie_entite_1 = new thr.BoxGeometry(
    1,
    1,
    1
);

const materiau_entite_1 = new thr.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
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

camera_1.position.z = 3;

const rendu_1 = new thr.WebGLRenderer();

rendu_1.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(rendu_1.domElement);

function animate() {
    requestAnimationFrame(animate);

    rendu_1.render(
        scene_1,
        camera_1
    );
}


animate();
console.log("test");