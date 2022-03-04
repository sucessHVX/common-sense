import styles from './Quiz.module.css';

export default function Quiz() {
  return (
    <>
      <h1>문제</h1>
      <canvas className={styles.canvas}></canvas>
      <div className="choice">
        <span>개</span>
        <span>노</span>
        <span>잼</span>
      </div>
    </>
  );
}
