import "@google/model-viewer";
import styles from "../styles/ModelViewer.module.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": MyElementAttributes;
    }
    interface MyElementAttributes {
      src: string;
      alt: string;
      class: string;
      "camera-orbit": string;
      "rotation-per-second": string;
      ar: boolean;
      "camera-controls": boolean;
      "auto-rotate": boolean;
    }
  }
}
const Model = () => {
  return (
    <model-viewer
      class={styles.modelViewer}
      src="/Stamp.glb"
      alt="A 3D model of a stamp"
      camera-orbit="90deg 90deg 4m"
      camera-controls
      auto-rotate
      rotation-per-second="30deg"
      ar
    ></model-viewer>
  );
};

export default Model;
