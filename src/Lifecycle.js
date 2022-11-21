import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("UnMount");
    };
  }, []);
  return <div>Unmount testing Component</div>;
};

const Lifecycle = () => {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  //
  // useEffect(() => {
  //   console.log("Mount");
  // }, []);
  //
  // useEffect(() => {
  //   console.log("update");
  // });
  //
  // useEffect(() => {
  //   console.log(`count is update ${count}`);
  //   if (count > 5) {
  //     alert("count 가 5를 넘었습니다 따라서 1로 초기화 합니다");
  //     setCount(1);
  //   }
  // }, [count]);
  //
  // useEffect(() => {
  //   console.log(`text is update ${text}`);
  // }, [text]);

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: 20 }}>
      <button type="button" onClick={toggle}>
        on/off
      </button>
      {isVisible && <UnMountTest />}
      {/*<div>*/}
      {/*  {count}*/}
      {/*  <button onClick={() => setCount(count + 1)}>+</button>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    value={text}*/}
      {/*    onChange={(e) => setText(e.target.value)}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
};

export default Lifecycle;
