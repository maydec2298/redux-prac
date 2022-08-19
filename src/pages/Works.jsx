import React from 'react';
import { useParams } from "react-router-dom";

const Works = () => {
  const param = useParams();
  // 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  console.log(param);

  return (
    <div>
      Works
    </div>
  );
};

export default Works;