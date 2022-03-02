import styles from './Quiz.module.css';

export default function Quiz() {
  return (
    <>
      <h1>문제</h1>
      <canvas className={styles.canvas}></canvas>
      <div className="choice">
        <span>1번</span>
        <span>2번</span>
        <span>3번</span>
      </div>
    </>
  );
}
