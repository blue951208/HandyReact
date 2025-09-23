import logo from './logo.svg';
import './App.css';

function App() {
  const startDate = new Date(2022, 11); // 2022년 12월
  const today = new Date();
  let years = (today.getFullYear() - startDate.getFullYear());
  let months = today.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }

  const nowDuration = `${years}년 ${months}개월`;
  years += 2;
  months += 1;
  const totalDuration = `${years}년 ${months}개월`;

  return (
    <>
      <div className="App">
        <h1>4년차 개발자 손동현입니다.</h1>
        <hr className="intro-line1"/>
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
            <div>
                <h2>끝까지 책임지는 4년 차 개발자<br/>손동현입니다.</h2>
                <p>
                    처음 접하는 기술 스택도 주저하지 않고
                    직접 학습하며 프로젝트에 적용해왔습니다.
                    익숙하지 않은 환경에서도 책임감을 바탕으로 끝
                    까지 완수해온 경험이 제 강점입니다.
                </p>
            </div>
            <div className="skills">
                <h2>스킬</h2>
                <ul>
                    <li>Frontend
                        <ul>
                            <li>jsp</li>
                            <li>jquery</li>
                            <li>Javascript</li>
                        </ul>
                    </li>
                    <li>Backend
                        <ul>
                            <li>Java</li>
                            <li>Spring Framework</li>
                        </ul>
                    </li>
                    <li>DB
                        <ul>
                            <li>PostgreSQL</li>
                            <li>Oracle</li>
                            <li>MariaDB</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      {/*  경력  */}
      </div>
      <div className="history">
        <h2>{`경력(총 경력 ${totalDuration})`}</h2>
        <hr className="intro-line1"/>
          <h3>{`푸드나무(2022.12 ~ 현재, ${nowDuration})`}</h3>

          <h3>아이엠디글로벌스(2020.10 ~ 2022.11, 2년 1개월</h3>
      </div>
    </>
  );
}

export default App;
