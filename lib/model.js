import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'dragon'
                obj.position.y = -2
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)
                gltf.scene.scale.set(3.8,3.8,3.8)

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = castShadow
                        child.receiveShadow = receiveShadow
                    }
                })

                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}