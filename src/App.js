import React, { useState } from "react";
// import Caver from "caver-js";

const App = () => {
  const [account, setAccount] = useState();

  // const caver = new Caver(window.klaytn);

  function checkInstallKlaytn() {
    if (typeof window.klaytn !== "undefined") {
      console.log("실행할것");
    } else {
      alert("kaikas 설치가 되어 있지 않습니다.");
    }
  }

  function getAccounts() {
    window.klaytn.enable().then((res) => setAccount(res[0]));
  }

  function getBalanceValue() {
    console.log(
      window.klaytn.fromPeb(window.klaytn.getBalance({ account }), "KLAY")
    );
    // const balance = caver.klay.getBalance(account);
    // console.log(balance);
  }

  return (
    <div>
      <div>안녕하세요</div>
      <div>{account}</div>
      <button onClick={checkInstallKlaytn}>계정 활성화</button>
      <button onClick={getAccounts}>계정 불러오기</button>
      <button onClick={getBalanceValue}>잔액 불러오기</button>
    </div>
  );
};

export default App;
