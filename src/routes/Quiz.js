import styles from './Quiz.module.css';

export default function Quiz() {
  return (
    <>
      <h1>문제</h1>
      <canvas className={styles.canvas}></canvas>
    </>
  );
}
