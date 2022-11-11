import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className={styles.container}>
      <h1 className={styles.title}>Test</h1>
    </motion.div>
  );
}
