'use client';

import logo from '../logo.svg';

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

    </>
  );
}

export default App;
