import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>4년차 개발자 손동현입니다.</h1>
        {/*<header className="App-header">*/}
        {/*  <img src={logo} className="App-logo" alt="logo" />*/}
        {/*  <p>*/}
        {/*    Edit <code>src/App.js</code> and save to reload.*/}
        {/*  </p>*/}
        {/*  <a*/}
        {/*    className="App-link"*/}
        {/*    href="https://reactjs.org"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Learn React 손동현*/}
        {/*  </a>*/}
        {/*</header>*/}
      </div>
      <div className="info-container">
        <div className="info1">
          <h2>손동현</h2>
          <h3>Tel. 010-9331-9753</h3>
          <h3>Email. blue951208@naver.com</h3>
        </div>
        <div className="short-intro">
          <h2>끝까지 책임지는 4년 차 개발자 손동현입니다.</h2>
          <p>
            처음 접하는 기술 스택도 주저하지 않고
            직접 학습하며 프로젝트에 적용해왔습니다.
            익숙하지 않은 환경에서도 책임감을 바탕으로 끝
            까지 완수해온 경험이 제 강점입니다.
          </p>
        </div>
      </div>
      <div className="skills">
        <h2>스킬</h2>
        <ul>
          <li>Frontend : jsp, jquery, Javascript</li>
          <li>Backend : Java, Spring Framework</li>
          <li>DB : PostgreSQL, Oracle, MariaDB</li>
        </ul>
      </div>
    </>
  );
}

export default App;
