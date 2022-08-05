// Create a canvas from the index.html canvas class (webgl) defined
const canvas = document.querySelector('canvas.webgl')

// Create Scene
const scene = new THREE.Scene()

// Create Box Object - first create geometry, then material. Add them together in a mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Add the box to the scene or it won't be visible
scene.add(mesh)

// Create a camera to view the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
// Position the camera so it isn't inside of your object
camera.position.z = 3
// Add the camera to the scene. Not required, but could prevent bugs in the future
scene.add(camera)

// Create Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
// Render the scene and camera
renderer.render(scene, camera)

