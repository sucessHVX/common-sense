import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    alert('개꿀');
  };

  return (
    <div className="App">
      <h1>상식 퀴즈</h1>
      <img className="firstImage" src="img/1.jpg"></img>
      <button onClick={onClick} className="startButton">
        시작
      </button>
    </div>
  );
}

export default App;
