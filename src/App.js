import React from "react";
import Router from "./shared/Router"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter"

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
  };

  // 콘솔로 onChangeHandler가 잘 연결되었는지 확인해봅니다.
  // input에 값을 넣을 때마다 콘솔에 그 값이 찍히면 연결 성공!
  // console.log(number);

  // 2. 더하기 버튼을 눌렀을 때 실행할 이벤트핸들러를 만들어줍니다.
  const onClickAddNumberHandler = () => {
    // 5. Action creator를 dispatch 해주고, 그때 Action creator의 인자에 number를 넣어줍니다.
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  }

  return (
    <div>
      <Router />
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler} >더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  )
}

export default App;