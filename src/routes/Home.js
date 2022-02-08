import Quiz from './Quiz';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 className="title">상식 퀴즈</h1>
      <img className="firstImage" src="img/1.jpg"></img>
      <button className="startButton">
        <Link className="startLink" to="/quiz">
          시작
        </Link>
      </button>
    </>
  );
}
