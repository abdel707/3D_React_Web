import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    const loader = new GLTFLoader();
    const lightDirection = new THREE.DirectionalLight(0xffffff, 1);
    let ordinateur = null;
    camera.position.z = 2;
    lightDirection.position.set(2, 2, 2);
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    loader.load( '/Asset/Computer.glb', ( gltf ) => {
            ordinateur = gltf.scene; 
            ordinateur.position.set(0,0,0);
            ordinateur.rotation.set(0,0,0);
            ordinateur.scale.set(1, 1, 1);


            
            scene.add(ordinateur);
            scene.add(lightDirection);

            const box = new THREE.Box3().setFromObject(ordinateur);
            const size = new THREE.Vector3();
            const center = new THREE.Vector3();

            box.getSize(size);
            box.getCenter(center);
            const maxDim = Math.max(size.x, size.y, size.z);
            const dist = maxDim * 2;
            camera.position.set(center.x, center.y, center.z + dist);
            camera.lookAt(center);
        }, undefined, function (error){console.error( error );

    });
   
   
        function animate(){
            if (ordinateur){
                ordinateur.rotation.y += 0.01;
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

    animate();
