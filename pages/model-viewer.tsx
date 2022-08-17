import type { NextPage } from "next";
import styles from "../styles/ModelViewer.module.css";
import dynamic from "next/dynamic";

const Model = dynamic(() => import("../components/Model"), { ssr: false });

import { Vector3, Scene, SceneLoader, ArcRotateCamera } from "@babylonjs/core";
import SceneComponent from "babylonjs-hook";
import "@babylonjs/loaders/glTF";

const onSceneReady = (scene: Scene) => {
  scene.createDefaultEnvironment();

  var camera = new ArcRotateCamera(
    "Camera",
    180 * (Math.PI / 180),
    90 * (Math.PI / 180),
    4,
    new Vector3(0, 1, 0),
    scene
  );

  const canvas = scene.getEngine().getRenderingCanvas();

  camera.attachControl(canvas, true);

  SceneLoader.ImportMesh("", "./", "Stamp.glb", scene, (meshes) => {
    meshes[0].position = new Vector3(0, 1, 0);
  });
};

const ModelViewer: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>&lt;model-viewer&gt;</h1>
      <Model />
      <h1 className={styles.title}>Babylon</h1>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        id="my-canvas"
        className={styles.babylonContainer}
      />
    </main>
  </div>
);

export default ModelViewer;
