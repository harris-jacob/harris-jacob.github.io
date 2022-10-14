import { useStarscape } from "../hooks/useStarscape";
import styles from "../styles/starscape.module.css";

/** Starscape background  */
const Starscape = () => {

  const canvasRef = useStarscape()

  return <canvas className={styles.canvas} ref={canvasRef} />;
};

export default Starscape;

