import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as controls from "three/addons/libs/tween.module.js";


const canvas = document.getElementById('canvas');


//Create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');

//Add a Camera
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.z=5;

//Define a geometry
const geometry = new THREE.DodecahedronGeometry();

//Define a material
const material = new THREE.MeshLambertMaterial({ color: '#468585' });

//Create the mesh
const dodecahedron = new THREE.Mesh(geometry, material);

const boxgeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxmaterial = new THREE.MeshLambertMaterial({ color: '#B4B4B3' });

const box = new THREE.Mesh(boxgeometry, boxmaterial);
box.position.y=-1.5;

scene.add(dodecahedron);
scene.add(box);

// Lights

const light = new THREE.AmbientLight(0x006769, 100);
light.position.set(1,1,1);
scene.add(light);


//Render the scene
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);


//add orbit controls
//  const controls = new THREE.OrbitControls(camera, renderer.domElement);
//  controls.enableDamping = true;
//  controls.dampingFactor = 0.05;
//  controls.enableZoom = true;
//  controls.enablePan = true;


// window.addEventListener('resize', () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//
//     // Update renderer size
//     renderer.setSize(width, height);
//
//     // Update camera aspect ratio
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
// });


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


function animate(){
    requestAnimationFrame(animate);


    dodecahedron.rotation.x += 0.5;
    dodecahedron.rotation.y += 0.5;

    box.rotation.x += 0.005;
    box.rotation.y += 0.005;
    controls.update()
    renderer.render(scene, camera);
}

animate();